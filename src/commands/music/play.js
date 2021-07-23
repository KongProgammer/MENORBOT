const Discord = require('discord.js')
const ytdl = require('ytdl-core')
const ffbinaries = require('ffbinaries');
const ffbinaries_extra = require('ffbinaries-extra');
const ffmpeg = require('ffmpeg');
const ffmpeg_static = require('ffmpeg-static');
const opusscript = require('opusscript');
const pesquisa = require('yt-search')


exports.run = async (client, message, args) => {

    const { voice } = message.member

    if (!voice.channelID) return message.channel.send(`**:x_: | Você não está em um canal de voz!**`)
    if(message.guild.me.voice.channel) return message.channel.send(`**:white_check_mark: | Eu já estou em um canal de voz!**`)

    const pes = args.join(" ")

    if(!pes) return message.channel.send(`**:x_: | Você não digitou um nome válido!**`)

    pesquisa(pes, async function (err, r) {

      let videos = r.videos;
      const connection = await message.member.voice.channel.join()
      let stream = ytdl(videos[0].url, {filter: "audioonly"})
      const tocar = connection.play(stream)

      tocar.on('finish', function() {
        message.channel.send('**a musica ja terminou **')
        message.guild.me.voice.channel.leave();
      })

    const PLAY = new Discord.MessageEmbed()
         .setTitle(`🔎 Pesquisando **${pes}**`)
         .setDescription(`Tocando **${videos[0].title}**`)
         .setURL(`${videos[0].url}`)
         .setColor('random')
    message.channel.send(PLAY)

    })

}