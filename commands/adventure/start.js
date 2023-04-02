module.exports = {
    name: "roles",
    description: 'Start a new adventure.',
    ownerOnly: false,

    run: async (client, interaction) => {
        interaction.reply({ content: `This command is not ready yet!`, ephemeral: true })
    }
};