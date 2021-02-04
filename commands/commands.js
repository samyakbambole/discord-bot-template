const Discord = require('discord.js'); 
const consola = require('consola'); 
const chalk = require('chalk'); 

module.exports = async (message) => {
     if (message.content === '!hi') {
          const Prompts = [
               'Hi!', 
               'Hello There!', 
               'Good Morning!', 
               'Hey!',
               'Hello!'
          ]; 
          const index = Math.floor(Math.random() * Prompts.length); 
          message.channel.send(`${Prompts[index]}`); 
     } else if (message.content === '!dev') {
          console.log(message); 
     }
}