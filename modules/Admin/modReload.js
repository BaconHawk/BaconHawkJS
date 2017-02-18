exports.command = 'modReload';

const Discord = require('discord.js');
const mod = require('../../modules.js');
const Config = require('../../config.json');

exports.modReload = {
	run: function(bot,suffix,msg) {	
		if(msg.author.id === Config.ownerID){
		mod.reload()
		const embed = new Discord.RichEmbed()
			.setTitle('Module Reload')
			.setDescription(`Modules Reloaded! Now Running ${mod.commandCount} modules!`)
			.setFooter('BaconHawkJS')
			.setTimestamp()
			.setColor(0xbb0000);

		msg.channel.sendEmbed(embed)
	}
	}
}