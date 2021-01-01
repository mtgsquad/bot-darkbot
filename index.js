require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  console.info(`Bot Will Now Listen for Any Commands And Will Respond To Them Immediatly!`)
  bot.user.setActivity(".help - DarkBOT", {type: "WATCHING"});
});

bot.on('message', msg => {
  if (msg.content === '.help') {
    msg.reply('My Commands Are .help And .ping - If You Need Help From A Staff Member Then Go Ahead And Make A Ticket :)')
  } else if (msg.content.startsWith('.ping')) {
    if (msg.mentions.users.size) {
      const message = msg.content();
      msg.channel.send(`Pong!`);
    } else {
      msg.reply('Pong!');
    }
  }
});
