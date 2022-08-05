module.exports = {
    name: "roles",
    description: 'Lists all the roles of the guild with the ID.',
    ownerOnly: false,

    run: async (client, interaction) => {
        let roles = interaction.guild.roles.cache.sort((a, b) => b.position - a.position).filter(r => r.position !== 0).map(r => `${r.name} → ${r.id}`);

        interaction.reply({ content: `\`\`\`d\n${roles.join('\n')}\n\nTotal : ${roles.length}\`\`\`` })
    }
};