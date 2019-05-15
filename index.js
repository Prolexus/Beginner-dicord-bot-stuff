const Discord = require('discord.js');
const bot = new Discord.Client()

const token = 'NTcwNDExMDk2ODQyOTYwOTY2.XL-zOw.q97HA3YY2ndcGZWBe43ojB-r680'

bot.on('ready', () =>{
    console.log('This bot in online!');
})

bot.on('message', msg=>{
    if(msg.content === "Hello"){
        msg.reply('Yiff me Zaddy~');
    }
})

bot.login(token);