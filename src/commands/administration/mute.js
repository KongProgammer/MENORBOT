module.exports = {
    name: "mute",
    description: "Mute a member from your server",

    async run (client, message, args) {
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("voce nao tem permissao de usar esse comando seu comedor de travego");

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!user) message.channel.send("Este usuário não pode ser encontrado em nenhum lugar deste servidor");

        if(user.id === message.author.id) return message.channel.send("Você não pode se silenciar, seu imbecil");

        let role = message.guild.roles.cache.find(x => x.name === "Silenciado");

        if(!role) return message.channel.send("por favor cria um cargo que chama `Silenciado` sem premissao ");

        let reason = args.slice(1).join(" ");
        if(reason === null) reason = "Unspecified"

        user.roles.add(role);

        await message.channel.send(`${user} ele foi mutado com sucesso a rasao: ${reason}`)

        user.send(`voce foi mutado por  ${message.guild.name} a razao foi: ${reason}`);
    }
}