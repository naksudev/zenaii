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

process.on('unhandledRejection', (reason, p) => {
	console.log(reason, p);
});

process.on('uncaughtException', (err, origin) => {
	console.log(err, origin);
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
	console.log(err, origin);
});

// Faut dire bonne nuit à Kavish quand même
const date = require('date-and-time');
const now = new Date();
const gn_time = date.format(now, 'HH:mm:ss');

if (gn_time === "23:00:00") {
	client.channels.fetch('1089243752448659457')
		.then(channel => {
			channel.send({content : 'Bonne nuit <@308327218197561344>!', files: [{ attachment: '/zenaii/assets/img/kavish/naruto.png', name: 'homie.png' }]});
		})
}

if (gn_time === "16:53:00") {
	client.channels.fetch('1089243752448659457')
		.then(channel => {
			channel.send({content : 'Bonne nuit <@308327218197561344>!', files: [{ attachment: '/zenaii/assets/img/kavish/naruto.png', name: 'homie.png' }]});
		})
}

client.login(config.token);
