const Discord = require('discord.js');
const Config = require('../../config.json');

exports.command = 'setGame';

exports.setGame = {
    run: function(bot,suffix,msg) {
        if(msg.author.id = Config.ownerID) {
            if(!suffix){
                const embed = new Discord.RichEmbed()
                msg.channel.sendEmbed(embed.setTitle('Set Game').addField('Error:', 'No Game Provided!').setFooter('BaconHawkJS').setColor([255,0,0]).setTimestamp());
            } else {
                bot.user.setGame(suffix);
                const embed = new Discord.RichEmbed()
                    .setTitle('Set Game')
                    .addField('Game Set!', `New Game: ${suffix}`)
                    .setFooter('BaconHawkJS')
                    .setTimestamp()
                    .setColor([50,50,50])
                msg.channel.sendEmbed(embed);
            }
        } else {
            const embed = new Discord.RichEmbed()
                .setTitle('Set Game')
                .addField('Error:', 'No Permission!')
                .setColor([255,0,0])
                .setTimestamp()
                .setFooter('BaconHawkJS')
            msg.channel.sendEmbed(embed);
        }
    }
}
