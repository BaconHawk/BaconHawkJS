exports.command = 'stats';

const Discord = require('discord.js');

exports.stats = {
	run: function(bot,suffix,msg) {
		const embed = new Discord.RichEmbed()
			.setTitle('Server Stats')
			.addField('Users:', `${bot.guilds.get(msg.guild.id).members.filter(u => !u.user.bot).size}`, true)
			.addField('Bots:', `${bot.guilds.get(msg.guild.id).members.filter(u => u.user.bot).size}`, true)
			.addField('Channels:', `${bot.guilds.get(msg.guild.id).channels.size}`, true)
			.setFooter('BaconHawkJS')
			.setTimestamp()
			.setColor(0xaa0000)
		msg.channel.sendEmbed(embed);
	}
}