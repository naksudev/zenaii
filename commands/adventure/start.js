module.exports = {
    name: "start",
    description: 'Start a new adventure.',
    ownerOnly: false,

    run: async (client, interaction) => {
        let profile_exists = await client.getUser(interaction.user);

        if (!profile_exists) {
            const settings = { userID: `${interaction.user.id}` };
            
            await client.createUser(settings);
            return interaction.reply({ content: `Your profile has been created. Welcome ${interaction.user.username}. \nTo start your adventure, do \`/quest\``, ephemeral: true });
        } else {
            return interaction.reply({ content: 'You already started your adventure ! Do \`/profile\` to see your progress.', ephemeral: true });
        }
    }
};