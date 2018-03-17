const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require("dotenv").config();
const CmdHandler = require('./CmdHandler.js');

const Bot = require("./libs/bot");
const config = require("./libs/config");
const logger = require("./libs/logger");

/*
** Bot initialization and events handling.
*/

CmdHandler.setVerbose();
const handler = new CmdHandler('commands');
handler.loadAllCommands();

client.on('ready', () => {
    /**
     * When the bot is ready modify the parameters (username, activity ...)
     */
    const bot = new Bot(client);
    bot.username(config.bot_name);
    bot.avatar(config.bot_avatar);
    bot.activity(config.bot_games[0]);
    //bot.note(config.bot_note);
    bot.status(config.bot_status);

    logger.info('Discord bot ready')
});

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
