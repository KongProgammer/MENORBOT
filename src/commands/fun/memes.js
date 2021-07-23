const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "meme",
    description: "Gives you a meme",
    async run (client, message, args) { 
        const subReddits = ["dankmemes", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
  
        const img = await randomPuppy(random);
  
        const memeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`o seu meme e  r/${random}`)
        .setURL(`https://www.reddit.com/r/memes_br/${random}`)
  
        message.channel.send(memeEmbed);
    }
}