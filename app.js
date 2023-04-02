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

// MongoDB
const mongoose = require("mongoose");
client.mongoose = require("./utils/db/mongoose");
client.mongoose.init();

// Login
client.login(config.token);

// Faut dire bonne nuit à Kavish quand même
const CronJob = require('cron').CronJob;
const job = new CronJob('0 0 23 * * *', function() {
	console.log('Log envoyé à 23h tous les jours !');
	client.channels.fetch('308327218197561344')
	.then(channel => {
		channel.send({content : 'Bonne nuit <@308327218197561344>!', files: [{ attachment: '/zenaii/assets/img/kavish/naruto.png', name: 'homie.png' }]});
	})
});

const aze = new CronJob('0 9 23 * * *', function() {
	console.log('Log envoyé à 23h tous les jours !');
	client.channels.fetch('263246215859142656')
	.then(channel => {
		channel.send({content : 'Bonne nuit <@308327218197561344>!', files: [{ attachment: '/zenaii/assets/img/kavish/naruto.png', name: 'homie.png' }]});
	})
});

aze.start();
job.start();