const Discord = require('./bot.js');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

exports.init = function(){
    load_modules();
};

function getDir(srcpath) {
    return fs.readdirSync(srcpath).filter(function(file) {
        return fs.statSync(path.join(srcpath, file)).isDirectory();
    });
}



const mainDir = './modules/';
const mainDirs = getDir(mainDir);


function load_modules() {
	let commandCount = 0;
	
	for (let i = 0; i<mainDirs.length; i++) {
		function getFile(srcpath) {
			return fs.readdirSync(srcpath).filter(function(file) {
				return fs.statSync(path.join(srcpath, file)).isFile();
			});
		}
		
		const moduleFile = getFile(mainDir + mainDirs[i]);
		
		for (let j = 0; j<moduleFile.length; j++) {
			let mod;
			
			try {
				mod = require(mainDir + mainDirs[i] + '/' + moduleFile[j]);
				if ("command" in mod) {
						Discord.addCommand(mod.command, mod[mod.command])
						commandCount++;
				}
			} catch(err) {
				console.log(chalk.red('ERR!') + ` The module ${moduleFile[j]} is set-up incorrectly!\n${err.stack}`);
			}
		}
	}
	console.log(chalk.blue('Success!') + ` ${commandCount} modules have been loaded!`)
}