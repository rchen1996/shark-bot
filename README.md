# Shark Bot

## About

Shark bot is a discord bot created for a private discord server. It sends back fun messages when prompted, assigns users and bots different roles upon joining the server, and allows for commands when the specified prefix is used.

## Tech Stack

- Node.js
- JavaScript
- discord.js (leverages the Discord API)

## Getting Started

1. Create a new application on the [Discord developer portal](https://discord.com/developers/applications), and add a bot under the "Bot" tab.
2. Setup `.env` with your bot's secret token.
3. Start up the bot with `npm start`

## Notes

- Sequences of numbers found in the code refer to IDs (e.g. users, emotes, roles). These can be found in Discord by performing a right-click followed by clicking on "Copy ID". Update these IDs to suit your needs.

## Using the Bot

- Add the bot to your server by going to `https://discord.com/api/oauth2/authorize?client_id=CLIENT_ID&scope=bot`, replacing `CLIENT_ID` with your bot's client ID found under the "General Information" tab in the developer portal.

### Commands

- Bot commands are prefixed with `!`
- `!invite` to get the bot to send the invite link for the server (need to provide invite link in `.env`)

### Message Responses

- typing `tea time` will result in a prompt from the bot to set a timer for 3 minutes
- typing `good morning` will result in the bot reacting to the message (currently uses a custom emote)

## Dependencies

- Node.js v12.16.x or above
- discord.js v12.5.x
