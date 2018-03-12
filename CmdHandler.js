const fs = require('fs');
const ErrorMessages = require ('./json_resources/ErrorMessages.json');
const botConfig	= require('./json_resources/bot_config.json');

class CmdHandler {
	constructor(folder) {
		if (!folder)
			throw new Error(ErrorMessages.CmdHandler.NO_FOLDER);
		this.cmdFolder = folder;
		this.commands = {};
		this.files = [];
		if (CmdHandler.verbose)
			console.log('CmdHandler instance created');
	}

	loadAllCommands() {
		this.files = fs.readdirSync(`./${this.cmdFolder}/`);
		this.files.forEach((file) => {
			let cmdName = file.substr(0, file.length - 3);
			this.commands[cmdName] = require(`./${this.cmdFolder}/${file}`);
			console.log(`./${this.cmdFolder}/${file}`);
		});
		if (CmdHandler.verbose) {
			console.log(`files read: ${this.files}`);
			console.log('loaded commands:', this.commands);
		}
	}

	treatMessage(client, message) {
		try {
			if (message.content.startsWith(botConfig.msgPrefix)) {
				let parsedMsg = this.getMsgParams(message.content);
				let command = new this.commands[parsedMsg.cmd]();
				command.run(client, message, parsedMsg.args);
			}
		} catch (err) {
			throw err;
		}
	}

	getMsgParams(msgContent) {
		try {
			let parsedMsg = {
				cmd : '',
				args : []
			};
			msgContent = msgContent.slice(botConfig.msgPrefix.length).trim().split(/ +/g);
			parsedMsg.cmd = msgContent[0];
			parsedMsg.args = msgContent.slice(1);
			return parsedMsg;
		} catch (err) {
			throw err;
		}
	}

	static setVerbose() {
		this.verbose = true;
	}

	static unsetsetVerbose() {
		this.verbose = false;
	}
}

module.exports = CmdHandler;
