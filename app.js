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

client.login(config.token);

const CronJob = require('cron').CronJob;

// Créer une nouvelle tâche planifiée pour s'exécuter tous les jours à 23 heures
const job = new CronJob('0 0 23 * * *', function() {
	console.log('Log envoyé à 23h tous les jours !');
	client.channels.fetch('1089243752448659457')
	.then(channel => {
		channel.send({content : 'Bonne nuit <@308327218197561344>!', files: [{ attachment: '/zenaii/assets/img/kavish/naruto.png', name: 'homie.png' }]});
	})
});

const test = new CronJob('0 0 19 * * *', function() {
	console.log('Log envoyé à 23h tous les jours !');
	client.channels.fetch('1089243752448659457')
	.then(channel => {
		channel.send({content : 'Bsdjmiqosjfm'});
	})
});

// Démarre la tâche planifiée
job.start();
test.start();