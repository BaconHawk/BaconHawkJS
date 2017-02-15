exports.command = "ping";

exports.ping = {
	run: function(bot,suffix,msg) {
		msg.reply('Pong!');
	}
}