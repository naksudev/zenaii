// Beautiful logging of slash commands.
const chalk = require('chalk');

module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(chalk.green(`[✔] Logged in as ${client.user.tag}`));

        client.application.commands.set(client.commands.map(cmd => cmd));
    }
};