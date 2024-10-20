const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Pong!',
    ownerOnly: false,

    run: async (client, interaction) => {
        await interaction.reply({ content: 'Pong!' });

        const msg = await interaction.fetchReply();
        const embed = new EmbedBuilder()
            .setColor("#FFFFFF")
            .setDescription(`Time : ${msg.createdTimestamp - interaction.createdTimestamp}ms \nAPI Ping : ${client.ws.ping}ms`)
        
        interaction.editReply({ embeds: [embed], content: '' });
    }
};