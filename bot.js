//BaconHawkJS Bot Frame Work by Bacon_Space & NiteHawk Please refer to https://github.com/BaconHawk/BaconHawkJS for help!

var log = console.log
var version = "v0.0.1"

try{
	var Discord = require("discord.js");
} catch(e) {
	log(e.stack);
	log(process.version);
	logError('Please run npm install and make sure it passes with NO errors!');
	process.exit();
}

log('Starting BaconHawkJS\nBaconHawkJS version: ' + version + '\nDiscordJS version: v' + Discord.version);

//Get Auth Data from Auth.json
try{
	var AuthData = require("./auth.json");
} catch(e) {
	log('Please create an auth.json file in the main directory based off of the auth.json.example file!\n' + e.stack);
	process.exit();
}

//Get Config Data from config.json
try{
	var Config = require("./config.json");
} catch(e) {
	log('Please create an config.json file in the main directory based off of the config.json.example file!\n' + e.stack);
	process.exit();
}

var bot = new Discord.Client();

if(AuthData.bot_token){
	bot.login(AuthData.bot_token);
} else{
	log('Please Provide a bot token in auth.json');
}