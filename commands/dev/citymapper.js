const { EmbedBuilder } = require('discord.js');
const querystring = require('querystring');
const r2 = require('r2');
require('dotenv').config();

module.exports = {
    name: "citymapper",
    description: 'API TEST',
    ownerOnly: true,

    run: async (client, interaction) => {
        const CITYMAPPER_API_URL = "https://api.external.citymapper.com/api/1/";
        const CITYMAPPER_API_KEY = process.env.CITYMAPPER_API_KEY;

        
        try {
            var images = await fetchAPI();
            
            interaction.reply({ content: `Le temps que ça prendra : ${images} minutes`, ephemeral: false });

        } catch(error) {
            console.log(error);
        }

        async function fetchAPI() {

            var headers = { 'Citymapper-Partner-Key': CITYMAPPER_API_KEY };
            var query_params = {
                'start': ["48.660718, 2.368886"],
                'end': ["48.731802, 2.251540"]
            }
    
            let queryString = querystring.stringify(query_params);

            try {
                let _url = CITYMAPPER_API_URL + `directions/transit?${queryString}`;
                var response = await r2.get(_url, {headers} ).json
                console.log(_url, response)
            } catch (e) {
                console.log(e);
            }
            return response;
        }
    }


};