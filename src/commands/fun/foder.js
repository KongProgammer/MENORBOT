const Discord = require("discord.js");
 
 
   exports.run = async (bot, message, args) => {
 
var list = [
'http://images.uncyc.org/pt/0/0f/Palito_tarado.gif','https://media.tenor.com/images/d01507ea5cd2f4222bc126ccdf95a8de/tenor.gif'
];
 
var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para foder!');
}
 
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('DEU A BUNDA')
        .setColor('#random')
        .setDescription(`${message.author} ta comendo a bunda ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('DEU A BUNDA COM VONDADE')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}