const defaultCommands = require('./commands/commands'); 
// const yourCommand = require('/path/to/file'); 

module.exports = (client) => {
     client.on('message', defaultCommands);
     // client.on('message', yourCommand); 
}