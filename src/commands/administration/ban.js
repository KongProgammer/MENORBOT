const Discord = require('discord.js');

module.exports = {
    name: "ban",
    description: "Kicks a member from the server",

    async run (client, message, args) {

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('voce nao pode ussa esse comando otario')
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('voce nao tem permissao de banir cusao.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('por favor qual e o pefil para banir');

        if(!member) return message.channel.send('Can\'t seem to find this user. Sorry \'bout that :/');
        if(!member.bannable) return message.channel.send('Nao e possivel banir essa pessoa pois ela e mod ou adm o cargo e alto que a minha nao foi possivel :(');

        if(member.id === message.author.id) return message.channel.send('tu tem cancer?? voce nao pode banir voce mesmo');

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'pergunta la no posto posto ipiranga';

        member.ban(reason)
        .catch(err => {
            if(err) return message.channel.send('Something went wrong')
        })

        const banembed = new Discord.MessageEmbed()
        .setTitle('Member Banned')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Banned', member)
        .addField('Kicked by', message.author)
        .addField('Reason', reason)
        .setFooter('Time kicked', client.user.displayAvatarURL())
        .setTimestamp()

        message.channel.send(banembed);


    }
}