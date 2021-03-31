require('dotenv').config();
const { Client } = require('discord.js');

const client = new Client();

client.login(process.env.DISCORDJS_BOT_TOKEN);

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in`);
});

client.on('message', message => {
  console.log(`[${message.author.tag}]: ${message.content}`);

  if (message.content === 'tea time') {
    message.reply("don't forget to tell Siri to set a timer for 3 minutes!");
  }
});
