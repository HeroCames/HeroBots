const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("515530250793254962");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**``Welcome To HeroSpaming``🌹**
`), 4000)        
}
});

client.on('message', message => {
        if (message.content.startWith(prefix H "unban all")){
    if(!message.channel.guild) return;
     message.guild.members.forEach( member => {
         
         member.unban()
     })
}
});

client.on("ready", () => {
  function lol() {
    client.guilds.get('512016054315122689').roles.find("name", "Rainbow").setColor("RANDOM");
  };
  setInterval(lol, 1600);
});
