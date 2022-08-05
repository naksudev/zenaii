const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'userinfo',
    description: 'Shows detailed informations about a user.',
    ownerOnly: false,

    run: async (client, interaction) => {
        const embed = new EmbedBuilder()
            .setDescription('test')

        interaction.reply({ embeds: [embed] });
    }
};