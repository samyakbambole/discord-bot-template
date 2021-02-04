const commands = require('./commands/commands'); 

const Discord = require('discord.js');
const chalk = require('chalk'); 
const consola = require('consola');  
// const token = 'YOUR-TOKEN_HERE'; 
const token = 'ODA0NzUxMzY2MjUzMzE0MDUw.YBQ5HQ.-C74qxen3usLsXr0PMlr9gEs28Y'; 

const client = new Discord.Client();

client.once('ready', () => {
	console.log(chalk.greenBright('Beep Boop! Discord Bot Ready!'));
});

client.on('message', commands); 

client.login(token);