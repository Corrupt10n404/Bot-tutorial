const discord = require('discord.js');
module.exports.run = (client,message,arguments) =>{
    message.channel.send(`Hi! You said: \"${message.content}\". I saw the arguments ${arguments.toString()}`);
};