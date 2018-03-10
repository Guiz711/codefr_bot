const Discord = require('discord.js');

class test {
	constructor() {
		console.log('test command created');
	}

	run(client, message, args) {
		message.channel.send('Hello World!')
			.catch(console.error);
	}
}

module.exports = test;