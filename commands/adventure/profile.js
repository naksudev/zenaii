module.exports = {
    name: "profile",
    description: 'See your profile adventure.',
    ownerOnly: false,

    run: async (client, interaction) => {
        let profile = await client.getUser(interaction.user.id);

        interaction.reply({ 
            content: `
                Name : ${interaction.user.username}
                Title : ${profile.title}
                Level : ${profile.level}
                XP : ${profile.xp}

                Badges : ${profile.badges}
            `
        })
    }
};