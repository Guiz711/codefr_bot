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

    avatar(link = null) {
        if (link === null) {
            return this.bot.avatarURL;
        }

        this.bot.setAvatar(link)
            .then(() => {
                logger.info("Avatar link: " + link)
            })
            .catch((err) => {
                logger.err("Error: " + err.code)
            });

    }

    activity(game = null) {
        if (game === null) {
            return this.bot.game;
        }

        this.bot.setActivity(game)
            .then(() => {
                logger.info("Game: " + game);
            })
            .catch((err) => {
                logger.err("Error: " + err.code)
            });
    }

    /**
     * This function changes the note of the user.
     * Otherwise it will simply returner the note of the current bot.
     * @param note
     */
    note(note = null) {
        if (note === null) {
            return this.bot.note;
        }

        this.bot.setNote(note)
            .then(() => {
                logger.info("Note: " + note);
            })
            .catch((err) => {
                logger.err("Error: " + err.code)
            });
    }


}

module.exports = Bot;