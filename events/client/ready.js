// Beautiful logging of slash commands.
const chalk = require('chalk');


module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(chalk.green(`[✔] Logged in as ${client.user.tag}`));

        client.application.commands.set(client.commands.map(cmd => cmd));

        // Faut dire bonne nuit à Kavish quand même
        const date = require('date-and-time');
        const now = new Date();
        const gn_time = date.format(now, 'HH:mm:ss');

        if (gn_time === "23:00:00") {
            client.channels.fetch('1089243752448659457')
                .then(channel => {
                    channel.send({content : 'Bonne nuit Kavish!', files: [{ attachment: '/zenaii/assets/img/kavish/naruto.png', name: 'homie.png' }]});
                })
        }
    }
};