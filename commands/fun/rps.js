const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
    name: "rps",
    description: 'Rock, Paper, Scissors!',
    ownerOnly: false,

    run: async (client, interaction) => {
        const embed = new EmbedBuilder()
            .setColor(Math.floor(Math.random() * 16777214) + 1)
            .setTitle(`Rock, Paper, Scissors - Choose your weapon ⚔️`)
            .setTimestamp()
            .setFooter(interaction.member.avatarURL());

        const rps_buttons = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('rock')
                    .setLabel('Rock 🧱')
                    .setStyle(ButtonStyle.Primary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('paper')
                    .setLabel('Paper 📃')
                    .setStyle(ButtonStyle.Primary)
            )
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('scissors')
                    .setLabel('Scissors ✂️')
                    .setStyle(ButtonStyle.Primary)
            )

        interaction.reply({ embeds: [embed], components: [rps_buttons] });
    }
};