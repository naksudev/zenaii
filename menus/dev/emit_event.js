module.exports = {
	name: 'emit_event',

	run: async (client, interaction) => {
        await client.emit(interaction.values[0], interaction.member);
        interaction.update({ content: `**${interaction.values[0]}** event emitted.`, components: [], ephemeral: true });
	},
};