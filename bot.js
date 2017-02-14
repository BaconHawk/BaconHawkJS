//BaconHawkJS Bot Frame Work by Bacon_Space & NiteHawk Please refer to https://github.com/BaconHawk/BaconHawkJS for help!

var chalk = require("chalk");
var logError = chalk.red('ERR!') + chalk.white
var log = console.log
var copyr = '© BaconHawk 2017'

try{
	var Discord = require("discord.js");
} catch(e) {
	log(logError(e.stack));
	log(logError(process.version));
	log('Please run npm install and make sure it passes with NO errors!');
	process.exit();
}

log('Starting BaconHawkJS\nBaconHawkJS version: ' + version + '\nDiscordJS version: v' + Discord.version);

//Get Auth Data from Auth.json
try{
	var AuthData = require("./auth.json");
} catch(e) {
	log(logError('Please create an auth.json file in the main directory based off of the auth.json.example file!\n' + e.stack));
	process.exit();
}

//Get Config Data from config.json
try{
	var Config = require("./config.json");
} catch(e) {
	log(logError('Please create an config.json file in the main directory based off of the config.json.example file!\n' + e.stack));
	process.exit();
}

var commands = {
	"ping": {
		run: function(bot,suffix,msg) {
			msg.reply('Pong!');
		}
	}
}

var bot = new Discord.Client();

function checkForCommand(msg) {
	if(msg.author.id != bot.user.id && msg.content.startsWith(Config.prefix)){
		
		var cmdTxt = msg.content.split(" ")[0].substring(Config.prefix.length);
		var suffix = msg.content.substring(cmdTxt.length+Config.prefix.length+1);
		
		log('Running ' + cmdTxt + `, from ${msg.author.id}, as a command!`);
		
		var cmd = commands[cmdTxt];
		
		if(cmd){
			try{
				cmd.run(bot,suffix,msg);
			} catch(e) {
				var msgTxt = 'Command ' + cmdTxt + ' was unable to run!';
				msg.channel.sendMessage(msgTxt);
			}
		}
	}
}

bot.on("message", msg => checkForCommand(msg, false));

if(AuthData.bot_token){
	bot.login(AuthData.bot_token);
} else{
	log(logError('Please Provide a bot token in auth.json'));
}
