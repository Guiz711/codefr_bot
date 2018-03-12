const Discord = require('discord.js');
const client = new Discord.Client();
const botToken = require('./json_resources/bot_token.json');
const botConfig	= require('./json_resources/bot_config.json');
const CmdHandler = require('./CmdHandler.js');

CmdHandler.setVerbose();
const handler = new CmdHandler('commands');
handler.loadAllCommands();


/**
 * ANG: When the bot is launched.
 * FRA: Lorsque le bot est lancé.
 */
client.on('ready', () => console.log('Discord bot ready'));

/**
 * ANG: When an error comes from discord.js.
 * FRA: Lorsque une erreur vient de discord.js.
 */
client.on('error', err => console.error(err));

/**
 * ANG: When the bot receives a message.
 * FRA: Lorsque le bot reçoit un message.
 */
client.on('message', msg => {
    try {
        handler.treatMessage(client, msg);
    } catch (err) {
        console.error(err.message);
    }
});

client.login(botToken);