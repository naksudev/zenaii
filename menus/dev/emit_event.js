const { EmbedBuilder } = require('discord.js');

module.exports = {
	name: 'emit_event',

	run: async (client, interaction) => {
        await client.emit(interaction.values[0], interaction.member);
        interaction.update({ content: `${interaction.values[0]} emitted.` });
	},
};