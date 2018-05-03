const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
    console.log("Le robot Discord s'est connecté !")

})
bot.on('message', message => {


if (message.content === '-hello') { message.reply ('Bonjour !') }

else if (message.content === '-help') { message.reply ('Prochainement !') }

bot.login(process.env.TOKEN)

