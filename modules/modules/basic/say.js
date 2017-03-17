exports.command = 'say';

const Discord = require('discord.js');

exports.say = {
    run: function(bot,suffix,msg) {
        msg.delete()
        let author = msg.member
        const embed = new Discord.RichEmbed()
            .setTitle(`${author.displayName} says:`)
            .setDescription(`\"${suffix}\"`)
            .setFooter('BaconHawkJS')
            .setTimestamp()
            .setColor([50,150,50])
        msg.channel.sendEmbed(embed);
    }
}