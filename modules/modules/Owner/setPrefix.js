exports.command = 'setPrefix';

const Discord = require('discord.js');
const Config = require('../../config.json')


exports.setPrefix = {
    run: function (bot, suffix, msg) {
            if (msg.guild.ownerID === msg.member.id) {
                bot.prefixes[msg.guild.id] = suffix;
                bot.db.put('prefixes', bot.prefixes);
                const embed = new Discord.RichEmbed()
                    .setTitle(`Set Prefix`)
                    .addField(`Prefix Set To:`, `${suffix}`)
                    .setColor([50, 100, 100])
                    .setTimestamp()
                    .setFooter(`BaconHawkJS`)
                msg.channel.sendEmbed(embed)
            } else {
                const embed = new Discord.RichEmbed()
                    .setTitle('Set Prefix')
                    .addField(`Error: `, `You are not the owner of this guild!`)
                    .setColor(0xff0000)
                    .setTimestamp()
                    .setFooter('BaconHawkJS')
                msg.channel.sendEmbed(embed)
            }
    }
}