const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
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

require('dotenv').config();

client.commands = new Collection();
client.slashCommands = new Collection();

module.exports = client;

['prefixCommands', 'slashCommands', 'events'].forEach(handler => { require(`./utils/handlers/${handler}`)(client); });

client.login(process.env.DISCORD_TOKEN);