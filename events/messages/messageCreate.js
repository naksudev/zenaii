module.exports = {
    name: 'messageCreate',
    once: false,

    execute(client, message) {
        if (message.channel.type === 1) {
            let getMessage = message.content.toLowerCase();
            getMessage = getMessage.toLowerCase();
            if (getMessage.includes("bonne nuit") && message.author.id !== client.config.clientID) return message.reply('Merciiii bonne nuit 💕💞💅');
        }
    }
};