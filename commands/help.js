const config = require("./../libs/config");
const logger = require("./../libs/logger");

class help {

	constructor() {
		logger.info("Help command initialised");
		this.helpFile = require("./../json_resources/help.json");
	}

	run(client, message, args) {

		let template = "";

		template += "```yaml\n";
		template += "├─ La commande help, retourne toute les commandes disponible.\n";
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
			.catch(console.error);
	}

}

module.exports = help;