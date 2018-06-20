const Discord = require('discord.js');
const client = new Discord.Client();

client.registry.registerGroup('random', 'Random');
client.registry.registerCommandsIn(__dirname + "/commands");

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
