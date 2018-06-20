const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'こんにちは') {
    	message.reply('こんにちはです！');
  	}
});

client.on('message', message => {
    if (message.content === 'おはよう') {
    	message.reply('おはようございます！');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
