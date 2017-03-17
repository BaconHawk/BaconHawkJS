exports.command = 'ping';

const Discord = require('discord.js');

exports.ping = {
	run: function(bot,suffix,msg) {
		const embed = new Discord.RichEmbed()
		msg.channel.sendMessage('Ping?')
			.then((message) => {
				try{
					message.edit( {embed: embed.setTitle("Pong!").addField("Took:", `${message.createdTimestamp - msg.createdTimestamp}ms!`).setFooter('BaconHawkJS').setTimestamp().setColor(0x023454)})
				} catch(e) {
					cosole.log(chalk.red('ERR! ') + e.stack)
				}
			});
	}
}