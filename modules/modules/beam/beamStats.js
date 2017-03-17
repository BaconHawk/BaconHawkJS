exports.command = 'bUser';

const Discord = require('discord.js');

exports.bUser = {
    run: function(bot,suffix,msg) {
        
        require("request")('https://beam.pro/api/v1/channels/'+suffix,
        function(err,res,body){
            const data = JSON.parse(body)
            if(!data) {
                const embed = new Discord.RichEmbed()
                    .setTitle('Beam Stats')
                    .addField(`Error!`, `${suffix} is not a valid Beam.pro user!`)
                    .setColor(0xff0000)
                    .setTimestamp()
                    .setFooter(`BaconHawkJS`)
                msg.channel.sendEmbed(embed);
                return;
            }
            if(!suffix) {
                const embed = new Discord.RichEmbed().setTitle(`Beam User Stats`).addField(`Error:`, `No User Supplied`).addField(`Correct Usage:`, `!bUser <user>`).setColor(0xff0000).setFooter(`BaconHawkJS`).setTimestamp();
                msg.channel.sendEmbed(embed);
                return;
            }
            if(data) {
                const embed = new Discord.RichEmbed()
                    .setTitle(`${suffix}'s Beam Stats`)
                    .addField('Username:', data.user.username, true)
                    .addField(`Online:`, data.online, true)
                    .addField('Followers:', data.numFollowers, true)
                    .addField(`Viewers:`, data.viewersTotal, true)
                    .addField(`Partnered:`, data.partnered, true)
                    .addField(`Audience:`, data.audience, true)
                    .addField(`Sparks:`, data.user.sparks, true)
                    .addField(`LvLs:`, data.user.level, true)
                    .addField(`Experience:`, data.user.experience, true)
                    .setColor([0,50,255])
                    .setTimestamp()
                    .setFooter('BaconHawkJS')
                msg.channel.sendEmbed(embed);
            }

        });
    
    }
}