module.exports = {
    name: "start",
    description: 'Start a new adventure.',
    ownerOnly: false,

    run: async (client, interaction) => {

        
        // !! Check si il y a déjà l'utilisateur d'enregistré dans la DB !!

    
        try {
            const settings = {
                userID: `${interaction.user.id}`,
                userName: `${interaction.user.username}`
            };
            await client.createUser(settings);
        } catch (e) {
            console.error(e)
        }

        interaction.reply({ content: `Done.`, ephemeral: true });
    }
};