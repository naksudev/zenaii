const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "profile",
    description: 'See your profile adventure.',
    ownerOnly: false,

    run: async (client, interaction) => {
        let profile = await client.getUser(interaction.user);

        const embed = new EmbedBuilder()
            .setColor(Math.floor(Math.random() * 16777214) + 1)
            .setAuthor({ name: 'Adventure Profile', iconURL: 'https://cdn2.steamgriddb.com/file/sgdb-cdn/icon/602d1305678a8d5fdb372271e980da6a/32/256x256.png' })
            .setThumbnail(`${interaction.user.avatarURL()}`)
            .addFields(
                { name: 'Name', value: interaction.user.username },
                { name: 'Title', value: `${profile.title}`, inline: true },
                { name: 'Level', value: `${profile.level}` },
                { name: 'XP', value: `${profile.xp}/${profile.xp_max}`},
                { name: 'Badges', value: `${profile.badges}` }
            )
            .setTimestamp()
            .setFooter({ text: interaction.user.tag, iconURL: `${interaction.user.avatarURL()}` });

        interaction.reply({ embeds: [embed] });
    }
};