require('dotenv').config();
const { Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const CLIENTID = process.env.CLIENT_ID;
const GUILDID = process.env.GUILD_ID;
const TOKEN = process.env.DISC_TOKEN;

const rest = new REST({ version: '10' }).setToken(TOKEN);

// for guild-based commands, replace third parameter with command id and run this to delete command
rest.delete(Routes.applicationGuildCommand(CLIENTID, GUILDID, "1016530690579366049"))
	.then(() => console.log('Successfully deleted guild command'))
	.catch(console.error);