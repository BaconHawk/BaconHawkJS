exports.command = 'eval';

const Discord = require('discord.js');
const Config = require('../../config.json');

exports.eval = {
    run: function(bot,suffix,msg) {
        if(msg.author.id != Config.ownerID) {
            const embed = new Discord.RichEmbed()
			msg.channel.sendEmbed(embed.setTimestamp().setTitle('Eval').addField('Error:', 'No Permission!').setColor(0xff0000).setFooter('BaconHawkJS'));
        } else{
            const embed = new Discord.RichEmbed()
                .setTitle('Eval')
                .setDescription( eval(suffix,bot))
                .setFooter('BaconHawkJS')
                 .setColor(0xff0000)
                 .setTimestamp()
            msg.channel.sendEmbed(embed);
        }
    }
}

