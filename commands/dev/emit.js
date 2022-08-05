const { ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
    name: "emit",
    description: 'Emit an event.',
    ownerOnly: true,

    run: async (client, interaction) => {
        const event = new ActionRowBuilder()
            .addComponents(
                new SelectMenuBuilder()
                    .setCustomId('emit_event')
                    .setPlaceholder('Select an event to emit')
                    .addOptions(
                        {
                            label: 'Ready',
                            value: 'ready'
                        },
                        {
                            label: 'GuildMemberAdd',
                            value: 'guildMemberAdd'
                        }
                    )
            );

        interaction.reply({ components: [event], ephemeral: true });
    }
};