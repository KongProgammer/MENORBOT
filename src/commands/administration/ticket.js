const Discord = require('discord.js')
exports.run = async (client, message, argumentos, arg_teste, chat, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author}, Você não tem permissão para usar este comando!`)
        return message.channel.send(embed);
      }
    // caso queira que só alguém/permissão/servidor/cargo possa usar esse ticket, chame a Aiko no servidor Comunidade YT
  const { guild } = message
  const icon = guild.iconURL()
  const comandos = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setThumbnail(icon)
  .setTitle('🎟️ - Ticket')
  .setDescription(`Olá, clique no emoji para criar um ticket!`)
  .setTimestamp()
  .setFooter(`Apenas administradores podem enviar essa mensagem`, message.author.displayAvatarURL({Size: 32}))

message.channel.send(comandos).then(msg => {
    msg.react('🎟️').then(r => { 
    })

    const prosseguirFilter = (reaction, user) => reaction.emoji.name === '🎟️';
 
    const prosseguir = msg.createReactionCollector(prosseguirFilter);
 
    prosseguir.on('collect', r2 => {
    const user = message.author.id;
    const name = "ticket-" + user;
    if(message.guild.channels.cache.find(ch => ch.name == name)) {
      console.log()
    }else message.guild.channels.create(name).then((chan)=>{
chan.updateOverwrite(message.guild.roles.everyone, {
    SEND_MESSAGES: false,
    VIEW_CHANNEL: false
})
chan.updateOverwrite(user,{
    SEND_MESSAGES: true,
    VIEW_CHANNEL: true
})
chan.send("✅ o ticket foi criado com sucesso agora espere algum adm ou mod possa te atender✅ ").then((m)=>{ m.pin() })
})
})
})
}