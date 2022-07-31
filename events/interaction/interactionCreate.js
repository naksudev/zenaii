module.exports = {
    name: 'interactionCreate',
    once: false,

    async execute(client, interaction) {
        if (interaction.isCommand()) {
            const cmd = client.slashCommands.get(interaction.commandName);
            
            if (!cmd) return interaction.reply('Cette commande n\'existe pas.');

            cmd.run(client, interaction);
        }
    }
};