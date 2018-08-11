const Discord = require('discord.js');
const client = new Discord.Client();
let timer;

let d5loa = [];

console.log("BOT ONLINE");

client.on("guildMemberAdd", member => {

       if(member.guild.id === 'ID of Server') {
           d5loa.push(member.user.id)
      }

    if(d5loa.includes(member.user.id)) return;


    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [`**__يا هلا بالقمر الي جانا ونور سمانا .. بدون وجودك أنسى من هو أنا , :sparkles:^^

^^مثل مابقيـــنا , بوجودك إلتَّميــــنا , وتشرفـــنا بيكك ياقمــــــــرنا ,, :sparkles::kiss:^^

تنورنابا وجودك**__**https://discord.gg/KuyBfF**__`]

  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})

client.login(process.env.BOT_TOKEN);
