const Discord = require('discord.js');
 
const bot = new Discord.Client();
 
const token = "Hell Nah";
 
var prefix = '!';
 
var eb = ["You can help youself right?",
"Not right now Please",
"Nope",
"NOOOOOOO",
"It is certain",
"It is decidedly so",
"Without a doubt",
"Yes, definitely",
"You may rely on it",
"As I see it, yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes",
"Reply hazy try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful"];
 
bot.on("ready", function() {
      bot.user.setGame("PayBot2 Prefix = !" , "https://www.twitch.tv/123silly");
    console.log(`Started bot as: ${bot.user.tag}!`);
});
 
bot.on("guildMemberAdd", function(member) {
let joinleaves = member.guild.channels.find("name","main-chat");
if(!joinleaves) return;
joinleaves.sendMessage(member.toString() + " welcome to the server!");
 
if(!joinleaves) return;
 
});
 
bot.on("guildMemberRemove", function(member) {
 
let joinleaves = member.guild.channels.find("name","main-chat");
 
if(!joinleaves) return;
 
joinleaves.send(member.toString() + " has left... We will miss you! :cry:");
});
 
bot.on("message", function(message) {
if (message.author.equals(bot.user)) return;
 
if (!message.content.startsWith(prefix)) return;
 
var args = message.content.substring(prefix.length).split(" ");
 
switch (args[0].toLowerCase()) {
 
case "emojis":
const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
message.channel.send(emojiList);
break;
case "8ball":
if (args[1]) {
  message.channel.sendMessage(':8ball: ' + message + '? - `' + eb[Math.floor(Math.random() * eb.length)] + '`');
} else {
  message.channel.sendMessage("Please provide a question");
}
break;
case "coinflip":
var result = Math.floor((Math.random() * 2) + 1);
    if (result === 1) {
    message.reply('The coin landed on heads');
} else if (result === 2) {
message.reply('The coin landed on tails');
}
break;
		
case "help":
message.delete("help")
console.log(`Help message has been sent to <@${message.author.id}> !`)
message.channel.sendMessage(`<@${message.author.id}> -> **Commands List** has been sent to your pm/dm!`)
var embedt = new Discord.RichEmbed()
.setTitle("All Commands")
.setDescription('These Commands Will Help You!')
.setThumbnail ('https://ak4.picdn.net/shutterstock/videos/10035044/thumb/1.jpg')
.addField(`!8ball`, `:8ball: Gives A Answer!`)
.addField(`!ping`, `Shows A 99% Correct Ping.`)
.addField(`!emojis`, `Shows A L Emoji / Image.`)
.addField(`!say`, `Say Whatver You Said.`)
.addField(`!animesearch`, `Search The Anime You Like.`)
.addField(`!mc [player]`, `Shows Minecraft Info.`)
.addField(`!ban [user]`, `Bans A User.`)
.addField(`!kick [user]`, `Kicks A User.`)
.addField(`!mute [user]`, `Mutes A User.`)
.addField(`!umute [user]`, `Unmutes A User.`)
.setFooter("PayBotV2 [Help]")
.setColor(0x1ab517)
message.author.sendEmbed(embedt)
break;

case "ping":
message.reply(`Pong! ${Math.round(bot.ping)}ms`);
break;
		
case "say":
    var sayargs = message.content.substring(5).split(" ");
                    const saymsg = sayargs.join(" ");
                    message.delete().catch(O_o=>{});
		    message.channel.sendMessage(saymsg);
  break;

case "animesearch":
if (args[1]) {
    message.reply(`https://www.animepower.net/` + args[1]);
} else {
    message.reply(`How to use: \n${prefix}searchanime [anime] **NOTICE: DONT USE SPACES, USE - =**`);
}
break;

        case "kick":
    let modRoles = message.guild.roles.find("name", "Moderator");
        if (args[1]) {
    if(message.member.roles.has(modRoles.id)) {
      let kickMember = message.guild.member(message.mentions.users.first());
      message.guild.member(kickMember).kick();
      message.channel.sendMessage(":fire: You Have been Kicked on Riskii's Discord :fire:");
      message.mentions.users.first().send(`:x: **You have been KICKED on ${message.guild.name}! :thinking: Please contact <@${message.author.id}> for more information!** :x:`)
    } else {
      return message.reply(":x: **You dont have permissions to do that!** :x:");
    }
    } else {
    return message.reply(`:x: **Please mention a user** :x:`);
    }
break;
case "ban":
    let modRolesss = message.guild.roles.find("name", "Moderator");
        if (args[1]) {
    if(message.member.roles.has(modRolesss.id)) {
      let banMember = message.guild.member(message.mentions.users.first());
      message.guild.member(banMember).ban();
      message.channel.sendMessage(":fire: You Have been banned on Riskii's Discord :fire:");
      message.mentions.users.first().send(`:x: **You have been PERM BANNED! on ${message.guild.name}! :thinking: Please contact <@${message.author.id}> for more information!** :x:`)
    } else {
      return message.reply(":x: **You dont have permissions to do that!** :x:");
    }
    } else {
    return message.reply(`:x: **Please mention a user** :x:`);
    }
break;
case "mute":
let modRolez = message.guild.roles.find("name", "Moderator");
if(message.member.roles.has(modRolez.id)) {
 let muteMember = message.guild.member(message.mentions.users.first());
 muteMember.addRole(muteMember.guild.roles.find("name", "Muted"));
 message.channel.sendMessage(":fire: You Have been Muted on Riskii's Discord :fire:");
 message.mentions.users.first().send(`:x: **You have been MUTED on ${message.guild.name}! :thinking: Please contact <@${message.author.id}> for more information!** :x:`)
}
else {
 return message.reply("=mute [player]");
}
break;
case "unmute":
let modRolezz = message.guild.roles.find("name", "Moderator");
if (args[1]) {
if(message.member.roles.has(modRolezz.id)) {
let unMember = message.guild.member(message.mentions.users.first());
unMember.removeRole(unMember.guild.roles.find("name", "Muted"));
message.channel.sendMessage(":fire: You Have been Unmuted on Riskii's Discord :fire:");
message.mentions.users.first().send(`:tada: **You have been unmuted on ${message.guild.name}! :wink: Please contact <@${message.author.id}> for more information!** :tada:`)
} else {
  return message.reply(":x: **You dont have permissions to do that!** :x:");
}
} else {
return message.reply(`=unmute [player]`);
}
break;
case "warn":
let modRoless = message.guild.roles.find("name", "Moderator");
if (args[1]) {
if(message.member.roles.has(modRoless.id)) {
let wMember = message.guild.member(message.mentions.users.first());
message.channel.sendMessage(":fire: You Have been Warned on Riskii's Discord :fire:");
message.mentions.users.first().send(`:x: **You have been warned on ${message.guild.name}! :thinking: Please contact <@${message.author.id}> for more information!** :x:`)
}
else
{
  return message.reply(":x: **You dont have permissions to do that!** :x:");
  } } else {
      return message.reply(`=mute [player]`);
  }
break;
case "unwarn":
let modRolex = message.guild.roles.find("name", "Moderator");
if (args[1]) {
if(message.member.roles.has(modRolex.id)) {
let uMember = message.guild.member(message.mentions.users.first());
message.channel.sendMessage(":arrow_right: The Member Has Been Unwarned! :point_left:");
 message.mentions.users.first().send(`:tada: **You have been unwarned on ${message.guild.name}! :wink: Please contact <@${message.author.id}> for more information!** :tada:`)
}
else
{
  return message.reply(":x: **You dont have permissions to do that!** :x:");
}
} else {
return message.reply(`:x: **Please mention a user** :x:`);
}
break;
case "mc":
var mc = new Discord.RichEmbed()
.setTitle("Minecraft information")
.setThumbnail('https://crafatar.com/renders/head/' + args[1] + '?helm&scale=10')
.setDescription('information about ' + args[1])
.addField('Username:', '' + args[1])
.addField(`Skin:`, `https://namemc.com/` + args[1] + '&s=700')
.addField('NameMc:', 'https://namemc.com/name/' + args[1])
.setFooter('Latenci')
message.channel.sendEmbed(mc)
break;
		
  case "marry":
    let mar = message.mentions.users.first();
    if (!mar) {
      message.reply("Please mention a user to marry.");
    } else {
    var mare = new Discord.RichEmbed()
    .setTitle(`New people has been married! :heart_eyes: :heart_eyes: `)
    .setDescription(`:heart: <@${message.author.id}> is now married with <@${mar.id}>! :wink:`)
    .setImage(`data:image/jpeg;base64,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`)
    .setColor(0x721487)
    message.channel.sendEmbed(mare);
    }
    break;
		
case "clear":
if (args[1]) {
    if (args[1] > 2) {
        if (args[1] > 50) {
            message.reply("You are clearing too much messages!");
        }
        else {
let messagecount = parseInt(args[1]);
  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
        }
    } else {
        message.reply("You can only delete 3 messages or more.");
    }
} else {
    message.reply("Please type number of messages to delete.");
}
break;
		
	
 
 
 
 
 
}
});
 
 
 
 
 
 
bot.login(process.env.BOT_TOKEN);
