const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('warn', console.warn);

client.on('error', console.error);



client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));

function timerFunc() {
    client.on('message', msg => {
      let spam = msg.guild.channels.find('name', 'spam');
        spam.send(Math.random().toString(36).substring(7))


    });
}

client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;



  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);



let args = message.content.split(" ").slice(1);

if(!args) return message.channel.send('${prefix}say <words>');	



if (command == "say") {

if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply("*لا تملك الصلاحيات المطلوبه**");



message.channel.send(args.join("  "))

    message.delete();

  }

});

var timer = setTimeout(timerFunc, 1000);

client.login(process.env.BOT_TOKEN); 