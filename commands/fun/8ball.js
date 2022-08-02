const { EmbedBuilder, Embed } = require('discord.js');

module.exports = {
    name: "8ball",
    description: 'The magic 8ball crystal can respond to any questions..',
    ownerOnly: false,

    options: [
        {
            name: 'question',
            description: 'Ask a question',
            type: 3,
            required: true,
        }
    ],

    run: async (client, interaction) => {
        const answers = require("../../assets/json/8ball_answers.json");

        const eightballAnswers = [];

        for (const x in answers) {
            if (x.includes('eightball_answer')) eightballAnswers.push(answers[x]);
        }

        const eightballAnswersIndex = Math.floor(Math.random() * eightballAnswers.length);

        const embed = new EmbedBuilder()
            .setColor(Math.floor(Math.random() * 16777214) + 1)
            .setAuthor({ name:'8ball', iconURL: 'https://emojipedia-us.s3.amazonaws.com/source/skype/289/pool-8-ball_1f3b1.png' })
            .addFields([
                { name: "Question", value: interaction.options.getString('question')},
                { name: "Answer", value: eightballAnswers[eightballAnswersIndex] }
            ])
            .setTimestamp()
            .setFooter({ text: interaction.user.tag, iconURL: `${interaction.user.avatarURL()}` })

        interaction.reply({ embeds: [embed] });
    }
};