require("dotenv").config();

const { Client} = require('discord.js');
const client = new Client();

client.on("ready", () => {
    console.log(`The client has logged in, Bot name: ${client.user.username}`);
})

client.login(process.env.DISCORD_BOT_TOKEN);                                                               
