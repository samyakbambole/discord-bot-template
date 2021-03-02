const commands = require('./commands/commands'); 

require('dotenv').config(); 

const Discord = require('discord.js');
const chalk = require('chalk'); 
const consola = require('consola');  

const client = new Discord.Client();

client.once('ready', () => {
	console.log(chalk.greenBright('Beep Boop! Discord Bot Ready!'));
});

client.on('message', commands); 

client.login(process.env.BOT_TOKEN);