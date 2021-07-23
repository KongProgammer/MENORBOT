const Discord = require("discord.js");
 
 
   exports.run = async (bot, message, args) => {
 
var list = [
'https://media3.giphy.com/media/vTfFCC3rSfKco/giphy.gif',
];
 
var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para casar!');
}
 
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('CASOU!!!!!')
        .setColor('#random')
        .setDescription(`${message.author} esta casado com ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('meu casal')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}