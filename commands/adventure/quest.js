module.exports = {
    name: "quest",
    description: 'Start your daily quest. ',
    ownerOnly: false,

    run: async (client, interaction) => {
        interaction.reply({ content: '...', ephemeral: true });

        
    }
};