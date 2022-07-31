module.exports = {
    name: "emit",
    description: 'Emettre un événement.',

    options: [
        {
            name: 'event',
            description: 'Choisir un événement.',
            type: 3,
            required: true,
            choices: [
                {
                    name: 'guildMemberAdd',
                    value: 'guildMemberAdd'
                },
                {
                    name: 'guildMemberRemove',
                    value: 'guildMemberRemove'
                }
            ]
        }
    ],

    run: async (client, interaction) => {
        const evtChoices = interaction.options.getString('event');

        switch (evtChoices) {
            case 'guildMemberAdd':
                client.emit('guildMemberAdd', interaction.member);
                interaction.reply("Check the console !");
                break;
        
            case 'guildMemberRemove':
                client.emit('guildMemberRemove', interaction.member);
                interaction.reply("Check the console !");
                break;
            default:
                break;
        }
    }
};