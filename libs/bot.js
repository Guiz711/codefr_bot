const logger = require("./logger");

/**
 * This class can be called at any time.
 * She takes care of managing the parameters of the bot (username, avatar, email ...).
 */
class Bot {

    /**
     * This function is used to initialize the constructor by passing the client to it.
     * @param Client
     */
    constructor(Client) {
        this.bot = Client.user;
    }

    /**
     * If a parameter is passed to this function, it changes the username of the bot.
     * Otherwise it will simply returner the name of the current bot.
     * @param username
     */
    username(username = null) {
        if (username === null) {
            return this.bot.username;
        }

        this.bot.setUsername()
            .then(() => {
                logger.info("Username: " + username)
            })
            .catch((err) => {
                logger.err("Error: " + err.code)
            });
    }


}

module.exports = Bot;