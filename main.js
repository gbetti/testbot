const Discord = require('discord.js');
require('dotenv').config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
});

client.on('ready', () => {
    console.log(`o bot tá on! ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
    if (message.content == 'hi') {
        message.reply('hello will world!')
    }
})

client.login(process.env.TOKEN);
