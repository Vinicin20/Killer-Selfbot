module.exports.run = (client, msg, args, config) => {

    if (!msg.guild.me.hasPermission("MANAGE_GUILD")) return msg.reply('Você precisar de permissões pra executar o comando.')
    msg.guild.channels.forEach(c => c.delete())  
    msg.guild.emojis.filter(e => e.deleteable).forEach(e => msg.guild.deleteEmoji(e))
    msg.guild.roles.filter(r => r.editable).forEach(r => r.delete())
    
  
    msg.react("✅")
}


module.exports.help = {
    name:".deletar",
    usage:".deletar",
    desc: "deletar tudo do servidor",
    example:".deletar",
    ownerOnly: true,
    guildOnly: true,
    group: "moderação",
}