const Discord = require("discord.js")

module.exports.run = async(client,message,args)=> {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author}, Você não tem permissão para usar este comando otario kkk.`)
        return message.channel.send(embed);
      }
    
  message.delete().catch(O_o => {});
    let role;
    if(args[1] && isNaN(args[1])) role = message.mentions.roles.first()
    if(args[1] && !isNaN(args[1])){
        role = message.guild.roles.cache.get(args[1])
    }
    let user;
    if(args[0] && isNaN(args[0])) user = message.mentions.users.first()
    if(args[0] && !isNaN(args[0])){
        user = client.users.cache.get(args[0])

        if(!message.guild.members.cache.has(args[0])) return message.reply(" Usuário nao encontrado**")
    }
    if(!user) return message.reply("Você precisa mencionar um usuario.**")
    if(!role) return message.reply("Você precisa mencionar um cargo.**")

if(message.guild.members.cache.get(user.id).roles.cache.has(role.id)) return message.reply("Você já possui este cargo.")
    message.guild.members.cache.get(user.id).roles.add(role.id).catch(e => message.reply(e))
    message.reply("**Cargo adicionado com sucesso!**")

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliase:[]
}

exports.help = {
    name:"addRole",
    description:"addRole",
    usage:"addRole",
    category:"moderation"
}