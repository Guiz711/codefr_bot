/**
 * This class is there for you to follow the pattern of the code for your next classes.
 */

const logger = require("./../libs/logger");

/**
 * Ping class that returns pong when called.
 */
class ping {

    /**
     * When the command is called.
     */
    constructor() {
        logger.info("Ping command initialised");
    }

    /**
     * Command automatically executed after calling the constructor.
     * @param client
     * @param message
     * @param args
     */
    run(client, message, args) {

        let ping = Math.round(client.ping);

        /**
         * Message sent.
         */
        message.channel.send("Pong ! " + ping + "ms")

            /**
             * When the shipment went well.
             */
            .then(function () {
                logger.info("Ping executed by " + client.username);
            })

            /**
             * When an error has occurred.
             */
            .catch(function (err) {
                logger.err("Error" + err.stderr);
            })

    }

}

/**
 * Finally, we export the class to be able to use it when a user types the command.
 * @type {ping}
 */
module.exports = ping;
