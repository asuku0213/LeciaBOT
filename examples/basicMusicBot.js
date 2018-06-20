const Discord = require('discord.js');
const Music = require('discord.js-musicbot-addon');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
});

Music.start(client, {
  youtubeKey: "AIzaSyAQKr5kSLqOb9B1ZWxoQIWhLXwkh88Yahw"
});

client.login("discord_AppToKEn");
