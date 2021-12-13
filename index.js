const express = require("express")
const app = express()
app.get("/", (req, res) => {
  res.send("You can edit me!")
})
app.listen(3000, () => {
  console.log("Project is ready!")
})

const Discord = require("discord.js");
const client = new Discord.Client({
  disableEveryone: true,
})

const prefix = "!"//You can change the prefix here

client.on('message', message => {
    if (message.content.startsWith(`${prefix}report`)) {
        if (message.author.bot) return;
        let valid = new Discord.MessageEmbed()
        .setColor('RED')
        .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle('Your Report Has Been Sent')
        .setDescription('Thanks for reporting a bug. This will help us improve much better.')
        .addField(`Reported by ${message.author.tag}`, 'Please wait for the admins to reply your report!')
        .setImage('https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif')
        message.channel.send(valid)
        const channel = client.channels.cache.get('CHANGE_THIS_WITH_YOUR_CHANNEL_ID')
        const ReportMessage = message.content.slice(7).trim();
        channel.send(`||${message.author}||` + "**'s Report : - **")
    }
});

client.on('message', message => {
    if (message.content.startsWith(`${prefix}help`)) {
    let embedmsg = new Discord.MessageEmbed()
    .setColor('RED')//you can use Hex color code, or solid color name like BLACK, WHITE, BLUE, or if you want random, type RANDOM
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))//you can delete .setAuthor section!
    .setTitle('📚 - Help Panel')
    .setDescription(`My prefix in this server is **${prefix}**`)
    .setThumbnail('')
    .addField(`${prefix}help\n${prefix}invite\n${prefix}report <your issue> \n${prefix}support\n${prefix}invite`)
    .setImage('https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif')//You can replace this link with another link you have!!!
    .setFooter('` Perseus`')
    message.channel.send(embedmsg);
  }
})

client.on("message", message => {
  if(message.content === `${prefix}support`) {
    let embedmsg = new Discord.MessageEmbed()
    .setColor('RED')//you can use Hex color code, or solid color name like BLACK, WHITE, BLUE, or if you want random, type RANDOM
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))//you can delete .setAuthor section!
    .setTitle('📚 - Support Panel')
    .setDescription('Need any support? Click one of these links below, and get your support ASAP')
    .setThumbnail('')
    .addField(`Support :`, '[Support Server](https://discord.gg/6XSjbKBbJT) \n Support DM : AtMostFear#7752 \n [Support E-Mail](https://www.google.com/search?q=rayzen.ytbe%40gmail.com) <= Not Recommended')
    .setImage('https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif')//You can replace this link with another link you have!!!
    .setFooter('Footer')
    message.channel.send(embedmsg);
  }
})

client.on("message", message => {
  if(message.content === `${prefix}invite`) {
    let embedmsg = new Discord.MessageEmbed()
    .setColor('RED')//you can use Hex color code, or solid color name like BLACK, WHITE, BLUE, or if you want random, type RANDOM
    .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))//you can delete .setAuthor section!
    .setTitle('<:tickets:906000150537854987> - Invite Panel')
    .setDescription('Thanks for choosing AtMostFear Developer as your Discord Assistant!')
    .setThumbnail('')
    .addField('Click The Link Below', `**Invite** [**Hermes**](https://discord.com/api/oauth2/authorize?client_id=${message.client.user.id}&permissions=486401&scope=bot)`)
    .setImage('https://media.discordapp.net/attachments/792900419671949354/820689966648524800/rainbow_line.gif')//You can replace this link with another link you have!!!
    .setFooter('~ Hermes')
    message.channel.send(embedmsg);
  }
})

client.login(process.env.TOKEN)
