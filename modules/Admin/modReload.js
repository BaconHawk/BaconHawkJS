exports.command = 'modReload';

const Discord = require('discord.js');
const mod = require('../../modules.js');
const Config = require('../../config.json');
const baconhawk = "BaconHawkJS"
exports.modReload = {
	run: function(bot,suffix,msg) {	
		if(msg.author.id === Config.ownerID){
			mod.reload()
			const embed = new Discord.RichEmbed()
				.setTitle('Module Reload')
				.setDescription(`Modules Reloaded! Now Running ${mod.commandCount} modules!`)
				.setFooter(baconhawk)
				.setTimestamp()
				.setColor(0xbb0000);

			msg.channel.sendEmbed(embed)
		} else {
			const embed = new Discord.RichEmbed()
			msg.channel.sendEmbed(embed.setTimestamp().setTitle('Module Reload').addField('Error:', 'No Permission!').setColor(0xff0000).setFooter('BaconHawkJS'));
		}
	}
}
