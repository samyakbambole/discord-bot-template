const commands = require('./commands/commands'); 

const Discord = require('discord.js');
const chalk = require('chalk'); 
const consola = require('consola');  
const token = 'YOUR-TOKEN_HERE'; 

const client = new Discord.Client();

client.once('ready', () => {
	console.log(chalk.greenBright('Beep Boop! Discord Bot Ready!'));
});

client.on('message', commands); 

client.login(token);