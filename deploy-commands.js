// run this only when commands are edited or added
require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');
const { Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');
const CLIENTID = process.env.CLIENT_ID;
const GUILDID = process.env.GUILD_ID;
const TOKEN = process.env.DISC_TOKEN;

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(TOKEN);

rest.put(Routes.applicationCommands(CLIENTID), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);