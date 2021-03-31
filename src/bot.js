require('dotenv').config();
const { Client } = require('discord.js');

const client = new Client();
const PREFIX = '!';

client.login(process.env.DISCORDJS_BOT_TOKEN);

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in`);
});

client.on('guildMemberAdd', guildMember => {
  if (guildMember.user.bot) {
    guildMember.roles.add('826179978995564555');
  } else {
    guildMember.roles.add('826151754835951617');
  }
});

client.on('message', message => {
  if (!message.author.bot) {
    console.log(`[${message.author.tag}]: ${message.content}`);

    if (message.content === 'tea time') {
      message.reply("don't forget to tell Siri to set a timer for 3 minutes!");
    }

    if (message.content.startsWith(PREFIX)) {
      const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);

      // switch (CMD_NAME) {
      //   case ''
      // }
    }
  }
});
