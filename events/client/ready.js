// Beautiful logging of slash commands.
const chalk = require('chalk');


module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(chalk.green(`[✔] Logged in as ${client.user.tag}`));

        client.application.commands.set(client.commands.map(cmd => cmd));

        const CronJob = require('cron').CronJob;

        // Créer une nouvelle tâche planifiée pour s'exécuter tous les jours à 23 heures
        const job = new CronJob('0 0 23 * * *', function() {
            console.log('Log envoyé à 23h tous les jours !');
            client.channels.fetch('1089243752448659457')
            .then(channel => {
                channel.send({content : 'Bonne nuit <@308327218197561344>!', files: [{ attachment: '/zenaii/assets/img/kavish/naruto.png', name: 'homie.png' }]});
            })
        });

        const test = new CronJob('0 50 18 * * *', function() {
            console.log('Log envoyé à 23h tous les jours !');
            client.channels.fetch('1089243752448659457')
            .then(channel => {
                channel.send({content : 'Bsdjmiqosjfm'});
            })
        });

        // Démarre la tâche planifiée
        job.start();
        test.start();
    }
};