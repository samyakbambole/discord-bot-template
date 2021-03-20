const commandHandler = require('./handler/commandHandler'); 

require('dotenv').config(); 

const Discord = require('discord.js');
const chalk = require('chalk'); 
const consola = require('consola');  

const client = new Discord.Client();

client.once('ready', () => {
	console.log(chalk.greenBright('Beep Boop! Discord Bot Ready!'));
	commandHandler(client); 
});

client.login(process.env.BOT_TOKEN);