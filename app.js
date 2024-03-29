const { Client, Collection, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildPresences,
		GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent
	],
	partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction]
});
const config = require('./config');

// Handlers
client.config = config;
client.commands = new Collection();
client.buttons = new Collection();
client.menus = new Collection();

['commands', 'events', 'buttons', 'menus'].forEach(handler => { require(`./utils/handlers/${handler}`)(client); });
require("./utils/db/functions")(client); 

// Errors handler
process.on('unhandledRejection', (reason, p) => {
	console.log(reason, p);
});

process.on('uncaughtException', (err, origin) => {
	console.log(err, origin);
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
	console.log(err, origin);
});

// Database connection
const mongoose = require("mongoose");
client.mongoose = require("./utils/db/mongoose");
client.mongoose.init();

// Discord connection
client.login(config.token);

// Faut dire bonne nuit à Kavish quand même
const CronJob = require('cron').CronJob;
const job = new CronJob('0 0 23 * * *', function() {
	client.users.cache.get('308327218197561344').send({
			content : 'Bonne nuit <@308327218197561344>!', 
			files: [{ attachment: '/zenaii/assets/img/kavish/naruto.png', name: 'homie.png' }]
		});
});

job.start();