//BaconHawkJS Bot Frame Work by Bacon_Space & NiteHawk Please refer to https://github.com/BaconHawk/BaconHawkJS for help!

const chalk = require("chalk");
const logError = chalk.red('ERR!') + chalk.white
const log = console.log
const Package = require("./package.json");

try{
	const Discord = require("discord.js");
} catch(e) {
	log(logError(e.stack));
	log(logError(process.version));
	log('Please run npm install and make sure it passes with NO errors!');
	process.exit();
}

log('Starting BaconHawkJS\nBaconHawkJS version: ' + Package.version + '\nDiscordJS version: v' + Discord.version);

//Get Auth Data from Auth.json
try{
	const AuthData = require("./auth.json");
} catch(e) {
	log(logError('Please create an auth.json file in the main directory based off of the auth.json.example file!\n' + e.stack));
	process.exit();
}

//Get Config Data from config.json
try{
	const Config = require("./config.json");
} catch(e) {
	log(logError('Please create an config.json file in the main directory based off of the config.json.example file!\n' + e.stack));
	process.exit();
}

let commands = {
	"ping": {
		run: function(bot,suffix,msg) {
			msg.reply('Pong!');
		}
	},
	
	"about": {
		run: function(bot,suffix,msg) {
			msg.reply('Feel Free To Check Out My New Framework Right Here https://github.com/BaconHawk/BaconHawkJS/');
		}
	}
}

const bot = new Discord.Client();

function checkForCommand(msg) {
	if(msg.author.id != bot.user.id && msg.content.startsWith(Config.prefix)){
		
		let cmdTxt = msg.content.split(" ")[0].substring(Config.prefix.length);
		let suffix = msg.content.substring(cmdTxt.length+Config.prefix.length+1);
		
		log('Running ' + cmdTxt + `, from ${msg.author.id}, as a command!`);
		
		let cmd = commands[cmdTxt];
		
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
bot.on("ready", function() {log(`Your bot is ready and running on \n ${bot.quilds.size} servers \n with ${bot.channels.size} channels \n for ${bot.users.filter(user => !user.bot).size} users!`)});

if(AuthData.bot_token){
	bot.login(AuthData.bot_token);
} else{
	log(logError('Please Provide a bot token in auth.json'));
}
