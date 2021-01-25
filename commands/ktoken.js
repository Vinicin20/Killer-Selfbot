
const { RichEmbed } = require('discord.js')
module.exports.run = async (client, msg, args, config) => {
msg.delete();
    let user = msg.mentions.users.first() || client.users.get(args[0])
    if(!user) return msg.channel.send('Você precisa mencionar um usuario.')
    let embed = new RichEmbed()
    .setDescription(Buffer.from(user.id).toString("base64"))
    .setColor("#01060d")
    .setFooter('oi sfada killer vai te GRABBEAR')
    msg.channel.send(embed)
}


module.exports.help = {
    name:"token",
    usage:".token",
    example:".token",
    group: "fun",
    ownerOnly: true,
    desc:"Manda uma parte do token do usuario"
}