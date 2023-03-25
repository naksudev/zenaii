module.exports = {
    name: 'interactionCreate',
    once: false,

    execute(client, interaction) {
        if (interaction.isCommand() || interaction.isContextMenuCommand()) {
            const cmd = client.commands.get(interaction.commandName);

            if (!cmd) return client.commands.delete(interaction.commandName);

            if (cmd.ownerOnly === true && interaction.member.id !== client.config.ownerID)
                return interaction.reply({ content: "You are not authorized to use this command !", ephemeral: true });

            cmd.run(client, interaction);
        }

        if (interaction.isButton()) {
            const btn = client.buttons.get(interaction.customId);

            if (!btn) return client.buttons.delete(interaction.customId);

            btn.run(client, interaction);
        }

        if (interaction.isStringSelectMenu()) {
            const menu = client.menus.get(interaction.customId);

            if (!menu) return client.menus.delete(interaction.customId);

            menu.run(client, interaction);
        }
    }
};