const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
    let user = args[0];
    let text = args.slice(1).join(" ") || undefined;
    let reason = args[0];
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`Você não tem premissão de \`Gerenciar Canais\``);
    if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("** Eu não tenho permissão para executar esse comando**")
    if (reason > 21600) return message.channel.send(":negado: Insira um número de 0 a 21600 para setar o modo lento")
        if (!args[0]) {
            return message.channel.send(`:negado: Insira um número de 0 a 21600 para setar o modo lento`)
        }
        if(isNaN(args[0])) return message.channel.send(":negado: Isso não é um número.")
    message.channel.setRateLimitPerUser(args[0])
    message.reply(`Modo lento definido para \`${args[0]}\` segundos!`)
}

exports.help = {
    name: 'slowmode',
    aliases: ['slow']
}