exports.command = 'me';

const Discord = require('discord.js');

exports.me = {
    run: function(bot,suffix,msg){
        const embed = new Discord.RichEmbed()
            .setTitle('User Stats')
            .addField(`Username`, `${msg.member.user.username}`)
            .addField(`Created At`, `${msg.member.user.createdAt}`)
            .addField(`Created Timestamp`, `${msg.member.user.createdTimestamp}ms`)
            .addField(`User ID`, `${msg.member.user.id}`)
            .addField('Last Message ID', `${msg.member.user.lastMessageID}`)
            .setColor(0x123456)
            .setFooter('BaconHawkJS')
            .setTimestamp()
        msg.channel.sendEmbed(embed);
    }
}