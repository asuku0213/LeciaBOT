const Discord = require('discord.js');

const PREFIX = "="

var fortunes = [
    "Yes",
    "No",
    "Maybe"
],

var client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (!message.content.startsWith(PREFIX)) return;
    
    var args = message.content.substring(PREFIX.length).splits(" ");
    
    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "info":
            message.channel.sendMessage("I'm created by Asuku!);
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Can't read that")
            break;
        default:
            message.channel.sendMessage("Invalid Command");
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
