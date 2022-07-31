module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(`Logged in as ${client.user.tag}`);

        const devGuild = await client.guilds.cache.get('633358979589865493');
        devGuild.commands.set(client.slashCommands.map(cmd => cmd));
    }
};