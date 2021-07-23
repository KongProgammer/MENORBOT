const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setTimestamp()
       .setDescription(`Olá ${message.author}, me chamo menor bot sou bot
      
      Eu fui criado em JavaScript;
      se voce quiser ver meu codico fonte acesso o link > https://github.com/KongProgammer/MENORBOT
      Meu Criador: StalinOCO#6666
      versao 0.00.8(BETA)
        `)
}