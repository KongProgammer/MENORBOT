const Discord = require("discord.js");

module.exports = {
    name: "meme",
    aliases: ["meme"],
    description: "Comando para ver um **meme**",
    usage: 'e!meme',
    category: 'diversao',

  run: async (client, message, args) => {
    var lista = [
       'http://images7.memedroid.com/images/UPLOADED710/5a665d68a2f5a.jpeg', 
       'https://cdn.joke4fun.com/media/posts/00000/9rwjz344pk7x.jpg','https://cdn.joke4fun.com/media/posts/00000/9rwjzd02gk7x.jpg',
       'https://images7.memedroid.com/images/UPLOADED872/5c2a90c373ad6.jpeg',
       'https://i.pinimg.com/736x/98/be/f2/98bef2158d0a8aeb76281ce9222ae930.jpg',
       'https://pm1.narvii.com/6693/e3edb723a2313ecad96aa6f97cd72cb5e4e9c4fb_hq.jpg',
       'https://images3.memedroid.com/images/UPLOADED112/5c9404a247291.jpeg',
       'https://pm1.narvii.com/6620/9c577e6d49284653e1eb919057c8bb1e070713ac_hq.jpg','https://images7.memedroid.com/images/UPLOADED237/584c61f74b0b9.jpeg',
       'http://images7.memedroid.com/images/UPLOADED857/5ac906b3f2373.jpeg',
       'https://images7.memedroid.com/images/UPLOADED863/5e0812097ce72.jpeg',
       'https://images7.memedroid.com/images/UPLOADED824/5ce48679215d7.jpeg',
       'https://images3.memedroid.com/images/UPLOADED196/59aad3c499bbd.jpeg',
       'https://pbs.twimg.com/media/DyVefP0XcAA_gBz.jpg',
      'https://i.pinimg.com/564x/8b/00/6e/8b006eef3f41fb564223ca40a9209015.jpg', 'https://i.pinimg.com/736x/3a/3a/fc/3a3afc19ee479c7b15d382fbca94da0a.jpg','https://pbs.twimg.com/media/EJxhVWWWsAEhzRx.jpg','https://i.redd.it/z4xt01hz8au51.jpg','http://4.bp.blogspot.com/-fi3ic8iVxC0/VQtwBS1H2tI/AAAAAAAAAGI/gyktdagW_fw/s1600/10178100_10204247702538367_8973967745440298938_n.jpg',''
 
      ];

    var aleatorio = lista[Math.floor(Math.random() * lista.length)];

     const embed = new Discord.MessageEmbed()
        .setTitle(`<🤣> Memes Humor Pesado <🤣> `)
        .setColor('#00008B')
        .setDescription('essa foi de fude kkkk')
        .setImage(aleatorio)
       message.channel.send(embed);
}
}