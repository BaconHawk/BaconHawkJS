exports.command = 'ping';

const Discord = require('discord.js');

exports.ping = {
	run: function(bot,suffix,msg) {
		const embed = new Discord.RichEmbed()
			.setTitle('Pong!')
			.setDescription()
			.setFooter('BaconHawkJS')
			.setTimestamp()
			.setColor(0xaa0000)
		msg.channel.sendMessage(embed)
			.then((message) => {
				message.edit( {embed: embed.setTitle("Pong!").addField("Took:", `${message.createdTimestamp - msg.createdTimestamp}ms!`).setFooter(copyr).setTimestamp().setColor(0x023454)})
			});
	}
}