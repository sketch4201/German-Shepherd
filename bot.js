const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTYxMTIyODQxMjE5NTYzNTMw.D3-IWg.HMX8J87nL0BMusOG6p7ndAy4vSk);
