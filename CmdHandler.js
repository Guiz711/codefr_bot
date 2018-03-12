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

    /**
	 * We load all the commands in the "commands" folder.
     */
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

    /**
	 * We look at the first parameter to execute the class that will execute the request command by the user.
     * @param client
     * @param message
     */
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

    /**
	 * It is given the complete message, it passes to seperate the beginning of the message (command) of the continuation.
     * @param msgContent
     * @returns {{cmd: string, args: Array}}
     */
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

    /**
	 * If this parameter is true, we will have more information at the level of the cli.
     */
	static setVerbose() {
		this.verbose = true;
	}

    /**
	 * If this parameter is false, we will have more information at the level of the cli.
     */
	static unsetsetVerbose() {
		this.verbose = false;
	}
}

module.exports = CmdHandler;
