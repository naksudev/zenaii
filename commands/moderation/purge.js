module.exports = {
    name: 'purge',
    description: 'Deletes a lot of messages.',
    ownerOnly: false,

    options: [
        {
            name: 'number',
            description: 'The number of messages to delete.',
            type: 4,
            required: true
        }
    ],

    run: async (client, interaction) => {
        interaction.reply({ content: 'This command hasn\'t been done yet..', ephemeral: true })
    }
};