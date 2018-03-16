const config = require("./../libs/config");
const logger = require("./../libs/logger");

class help {

	constructor() {
		logger.info("Help command initialised");
		this.helpFile = require("./../json_resources/commands.json");
	}

	run(client, message, args) {

		let template = "";

		template += "```yaml\n";
		template += "├─ Voici la liste des commandes.\n";
		template += "│\n";

		this.helpFile.commands.forEach((command, index) => {
			let maxCommand = this.helpFile.commands.length - 1;

			if (index !== maxCommand) {
				template += "├───" + config.cmd_prefix + command.name + " \t- " + command.desc + "\n";
			} else {
				template += "└───" + config.cmd_prefix + command.name + " \t- " + command.desc + "\n";
			}
		});

		template += "```\n";

		message.channel.send(template)

			/**
			 * When the shipment went well.
			 */
			.then(function() {
				logger.info("Help executed by " + message.author.tag);
			})

			/**
			 * When an error has occurred.
			 */
			.catch(function(err) {
				logger.info("Error" + err.stderr);
			})
	}

}

module.exports = help;