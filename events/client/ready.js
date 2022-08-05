// Beautiful logging of slash commands.
const chalk = require('chalk');

// const { REST } = require('@discordjs/rest');
// const { Routes } = require('discord.js');

module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(chalk.green(`[✔] Logged in as ${client.user.tag}`));

        // Instant application of commands in the development guild
        const devGuild = await client.guilds.cache.get('633358979589865493');

        if (client.user.id === "481790847193710603") 
        {
            devGuild.commands.set(client.commands.map(cmd => cmd));
        } 
        else if (client.user.id === "573868521117843476") 
        {
            client.application.commands.set(client.commands.map(cmd => cmd));
        }
    }
};