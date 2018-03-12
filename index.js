const Discord = require('discord.js');
const client = new Discord.Client();
const botToken = require('./json_resources/bot_token.json');
const botConfig	= require('./json_resources/bot_config.json');
const CmdHandler = require('./CmdHandler.js');

CmdHandler.setVerbose();
const handler = new CmdHandler('commands');
handler.loadAllCommands();

client.on('ready', () => console.log('Discord bot ready'));
client.on('error', err => console.error(err));

client.on('message', msg => {
	try {
		handler.treatMessage(client, msg);
	} catch (err) {
		console.error(err.message);
	}
});

client.login(botToken);