module.exports = {
    name: "ping",
    description: 'Commande ping',

    run: async (client, message, args) => {
        const msg = await message.channel.send("Pinging...");
        await msg.edit(`🏓 | Pong! ${msg.createdTimestamp - message.createdTimestamp}ms.`);
    }
};