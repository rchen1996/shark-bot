require('dotenv').config();
const { Client } = require('discord.js');

const client = new Client();
const PREFIX = '!';

client.login(process.env.DISCORDJS_BOT_TOKEN);

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in`);
});

// when a new member enters the server, given them a role depending on if bot or not
client.on('guildMemberAdd', guildMember => {
  if (guildMember.user.bot) {
    guildMember.roles.add('826179978995564555');
  } else {
    guildMember.roles.add('826151754835951617');
  }
});

client.on('message', message => {
  // only make responses if the message was not sent by a bot
  if (!message.author.bot) {
    // message log
    console.log(`[${message.author.tag}]: ${message.content}`);

    // .reply will @ the user that sent the message
    if (message.content === 'tea time') {
      message.reply("don't forget to tell Siri to set a timer for 3 minutes!");
    }

    // reacts using custom emote
    if (message.content.toLowerCase().includes('good morning')) {
      message.react(message.guild.emojis.cache.get('826936833128267796'));
    }

    // looks to see if the message starts with !
    if (message.content.startsWith(PREFIX)) {
      // destructure the content - substring to remove prefix
      // everything before space and after prefix is the command
      // everything else are the arguments provided
      const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);

      switch (CMD_NAME) {
        case 'invite':
          message.channel.send(process.env.INVITE_LINK);
          break;
      }
    }
  }
});
