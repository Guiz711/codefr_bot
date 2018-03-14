const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require("dotenv").config();
const CmdHandler = require('./CmdHandler.js');

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
    let bot;

    bot = client.user;
    bot.setUsername(config.bot_name)
        .then(() => {
            logger.info("Username: " + bot.username)
        })
        .catch(err => {
            logger.err("Error: " + err.code)
        });

    bot.setActivity(config.bot_games[0])
        .then(() => {
            logger.info("Activity: " + config.bot_games[1])
        });

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