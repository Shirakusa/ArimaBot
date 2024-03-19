const { SlashCommandBuilder } = require('discord.js')
let mainCommand = 'eplo'
let mensagem = 'sai porque? .net o que? .net , ele ta aqui vai fazer o que? .net porra, EU VOU MATA Porque? essa porra não é de deus não, .net é um negócio do diabo... .net.. , eu vou lhe pegar .net, eu vou lhe achar, EU VOU LHE ACHAR , VOU , VOU LHE ACHAR, PORQUE eu não sou qualquer um não , eu sou loirinho, eu sou loirinho da extensão, EU SOU LOIRINHO DA EXTENSÃO , EU VOU LHE PEGAR .NET'

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`${mainCommand}loiro`)
        .setDescription('É o loirinho da extensão'),
    async execute(interaction){
        await interaction.reply({content: mensagem, tts: true})
    },
}