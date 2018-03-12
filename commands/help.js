const Discord = require('discord.js');

class help {
	constructor() {
		console.log('test command created');
	}

	run(client, message, args) {
		message.channel.send('This is the help command.')
			.catch(console.error);
	}
}

module.exports = help;