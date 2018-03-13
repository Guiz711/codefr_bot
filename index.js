const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require("dotenv").config();
const botConfig	= require('./json_resources/bot_config.json');
const CmdHandler = require('./CmdHandler.js');

/*
** Bot initialization and events handling.
*/

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

/**
 * bot_token.json content:
 *  {
 *      "T": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
 *  }
 */
client.login(process.env.BOT_TOKEN);