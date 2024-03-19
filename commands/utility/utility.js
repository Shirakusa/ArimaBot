const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
let mainCommand = 'eplo'
let urlGif = 'https://c.tenor.com/FpUCgxG3oB4AAAAC/tenor.gif'

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`${mainCommand}next`)
        .setDescription('Oque tem de next'),
    async execute(interaction) {
        const embeded = new EmbedBuilder()
            .setImage(urlGif)

        await interaction.reply({ content: 'Tem que ver isso ai em.', tts: true, embeds: [embeded] })
    },
}