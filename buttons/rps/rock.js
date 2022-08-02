const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "rock",

    run: async (client, interaction) => {
        let outcomes = ['🧱','📰','✂️'];
        let botOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
        const embed = new EmbedBuilder()
            .setColor(Math.floor(Math.random() * 16777214) + 1)
            .setTitle('Results')
            .addFields([
                { name: "User", value: "🧱", inline: true },
                { name: "Bot", value: botOutcome, inline: true }
            ])
            .setTimestamp()
            .setFooter(interaction.member.avatarURL());

        switch (botOutcome) {
            case '🧱':
                embed.setTitle(`Draw!`);
                interaction.update({ embeds: [embed] }); 
                break;

            case '📰':
                embed.setTitle(`You lose.`);
                interaction.update({ embeds: [embed] }); 
                break;

            case '✂️':
                embed.setTitle(`You won.`);
                interaction.update({ embeds: [embed] }); 
                break;
        
            default:
                break;
        }
    }
}