const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "="

var fortunes = [
    "Yes",
    "No",
    "Maybe"
];

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()){
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "info":
            message.channel.sendMessage("Created by Asuku")
            break;
        case "8ball":
            if (args[1] message.channel.sendMessage(fonrtunes[Math.floor(Math.random()*length)]);
            break;
        default:
            message.channel.sendMessage("Invalid command");
    }
}

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
