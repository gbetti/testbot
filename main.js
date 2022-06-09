const Discord = require('discord.js');
require('dotenv').config();

const generateImage = require('./generateImage');

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
});

const welcomeChannelId = '984201469647532144';

client.on('ready', () => {
    console.log(`o bot tá on! ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
    if (message.content == 'hi') {
        message.reply('hello will world!')
    }
});

client.on('guildMemberAdd', async (member) => {
    const img = await generateImage(member);
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
        });
});

client.login(process.env.TOKEN);
