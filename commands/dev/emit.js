module.exports = {
    name: "emit",
    description: 'Emit a event.',
    ownerOnly: true,

    options: [
        {
            name: 'event',
            description: 'Choose an event.',
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
                interaction.reply({ content: "Event emitted, check the console.", ephemeral: true });
                break;
            case 'guildMemberRemove':
                client.emit('guildMemberRemove', interaction.member);
                interaction.reply({ content: "Event emitted, check the console.", ephemeral: true });
                break;
            default:
                break;
        }
    }
};