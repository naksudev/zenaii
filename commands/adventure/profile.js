module.exports = {
    name: "profile",
    description: 'See your profile adventure.',
    ownerOnly: false,

    run: async (client, interaction) => {
        interaction.reply({ content: `This command is not ready yet!`, ephemeral: true })
    }
};