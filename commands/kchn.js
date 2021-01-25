
const Discord = require('discord.js');
const colors = require('colors');
const config = require('../config.json')

module.exports.run = async (client, msg, args) => {
	msg.delete();
  for(i = 0; i < 250; i++){
        await msg.guild.createChannel(config.nomecanais);
    }
    
    console.log(' ');
}
