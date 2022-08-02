const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "scissors",

    run: async (client, interaction) => {
        let outcomes = ['🧱','📰','✂️'];
        let botOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
        const embed = new EmbedBuilder()
            .setColor(Math.floor(Math.random() * 16777214) + 1)
            .addFields([
                { name: interaction.user.tag, value: "✂️", inline: true },
                { name: "Bot", value: botOutcome, inline: true }
            ])
            .setTimestamp()

        switch (botOutcome) {
            case '🧱':
                embed.setTitle(`You lose.`);
                interaction.update({ embeds: [embed] }); 
                break;

            case '📰':
                embed.setTitle(`You won.`);
                interaction.update({ embeds: [embed] }); 
                break;

            case '✂️':
                embed.setTitle(`Draw!`);
                interaction.update({ embeds: [embed] }); 
                break;
        
            default:
                break;
        }
    }
}