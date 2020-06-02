const Discord = require('discord.js')
const config = require('./config.json')
const client = new Discord.Client()
client.on('ready',()=>{
    console.log(`Logged in as ${client.user.tag}`)
});
client.on('message',message=>{
    if(message.author.bot){
        return
    };
    if(message.author.system){
        return
    }
    if(message.content.startsWith(config.prefix)){
        let command = message.content.split(config.prefix)[1]
        let arguments = command.split(" ")
        arguments.shift()
        command = command.split(" ")[0]
        let file = false
        try{
            file = require(`./commands/${command}`)
        }
        catch{
            //This is what we do if a message starts with our prefix, but isn't a valid command. You can always change this to something like message.channel.send("That's not a valid command!");
        }
        if(file){
            try{
                file.run(client,message,arguments)
            }
            catch(err){
                console.log(err) // This makes sure that if an error happens, we don't stop the bot
            }
        }
    }
});
client.login(config.token);