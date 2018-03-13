const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require("dotenv").config();
const CmdHandler = require('./CmdHandler.js');
const logger = require("./libs/logger");

/*
** Bot initialization and events handling.
*/

CmdHandler.setVerbose();
const handler = new CmdHandler('commands');
handler.loadAllCommands();

client.on('ready', () =>
    logger.info('Discord bot ready')
);

client.on('error', err =>
    logger.err(err)
);

client.on('message', msg => {
    try {
        handler.treatMessage(client, msg);
    } catch (err) {
        logger.err(err.message);
    }
});

/**
 * bot_token.json content:
 *  {
 *      "T": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
 *  }
 */
client.login(process.env.BOT_TOKEN);