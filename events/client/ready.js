// Beautiful logging of slash commands.
const chalk = require('chalk');

module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(chalk.green(`[✔] Logged in as ${client.user.tag}`));

        const devGuild = await client.guilds.cache.get('633358979589865493');
        devGuild.commands.set(client.commands.map(cmd => cmd));
    }
};