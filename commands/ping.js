/**
 * This class is there for you to follow the pattern of the code for your next classes.
 */

/**
 * Ping class that returns pong when called.
 */
class ping {

    /**
     * When the command is called.
     */
    constructor() {
        console.log("Ping command initialised");
    }

    /**
     * Command automatically executed after calling the constructor.
     * @param client
     * @param message
     * @param args
     */
    run(client, message, args) {

        /**
         * Message sent.
         */
        time = Date.now() - message.createdTimestamp;
        message.channel.send("Pong ! "+time+"ms");

            /**
             * When the shipment went well.
             */
            .then(function () {
                console.log("Ping executed by " + client.username);
            })

            /**
             * When an error has occurred.
             */
            .catch(function (err) {
                console.log("Error" + err.stderr);
            })

    }

}

/**
 * Finally, we export the class to be able to use it when a user types the command.
 * @type {ping}
 */
module.exports = ping;