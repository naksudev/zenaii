module.exports = {
    name: 'interactionCreate',
    once: false,

    async execute(client, interaction) {
        if (interaction.isCommand()) {
            const cmd = client.commands.get(interaction.commandName);
            
            if (!cmd) return client.commands.delete(interaction.commandName);

            if (cmd.ownerOnly === true && interaction.member.id !== client.config.ownerID) 
                return interaction.reply({ content: "You are not authorized to use this command !", ephemeral: true }); 

            cmd.run(client, interaction);
        }
    }
};