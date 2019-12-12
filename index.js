const discord = require('discord.js');
const bot = new discord.Client();
const PREFIX = '!';
const token = 'NjQ1MTAwNTI3OTEwMTI1NTg4.Xc94EQ.hwud5y211_MfSmxX7LUmYgx0Vn8';

var version = '1.0.1';

const ytdl = require("ytdl-core");

var server = {};

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`)
    bot.user.setActivity("Listening to Bandit", {type: "Playing"});
});


bot.on("guildMemberAdd", member =>{
    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if(!channel) return;

    channel.send(`Welcome to our server, ${member}! Please review the rules in the rules channel before chatting with us.`);
});

bot.on('message', message =>{
    if (message.content === 'hi') {
        message.reply('hello!');
    }
    if(message.content === 'jordan') {
        message.reply('is cool');
    }
    if(message.content === 'flvurry') {
        message.reply('is cool')
    }

   let args = message.content.substring(PREFIX.length).split(" ");
   
   switch(args[0]){

                case 'josh':
                    const joshembed = new discord.RichEmbed()
                    .setThumbnail(message.author.avatarURL)
                    .setTitle("**__Josh__**")
                    .addField("**Bot**", "Josh is a bot at Fortnite")
                    .addField("**Food**", "This dude eats Chinese food everyday bruv")
                    .addField("**Joshy**", "Josh you're dumb ok")
                    .addField("**Boomer moment**", "Josh is a boomer.")
                    .addField("**Favorite statement**", "Honestly that's just way of the road dude")
                    .addField("**Fortnite Montage**", "I'm shitting on these kids")
                    .setFooter("Inspired by Josh | dox.#8237")
                    .setColor(0xfcba03)
                    message.channel.sendEmbed(joshembed);
   
                    case 'KermitsAlliance':
                        const KermitsAlliance = new discord.RichEmbed()
                     .setThumbnail(message.author.avatarURL)
                     .setTitle("**:tada: NEW ALLIANCE! :tada:**")
                     .addField("**Description**", "Welcome to Kermit's Lounge! We're an active gaming community looking for new members to join. Be sure to join today!")
                      .addField("**Development**", "[:bangbang: SETUP IN PROGRESS! :bangbang:]")
                     .addField("**Invite**", ":link: https://discord.gg/BmZuyar")
                    .setFooter("Kermit's Lounge Sponsorship | BoomerFrog#4742")
                  .setColor(0xfcba03)
                      message.channel.sendEmbed(KermitsAlliance);
   
                    case 'DillonsAlliance':
                        const DillonAlly = new discord.RichEmbed()
                        .setThumbnail(message.author.avatarURL)
                        .setTitle("**:tada: NEW ALLIANCE! :tada:**")
                        .addField("**Description**", "Welcome to the Meme Chat. The place where memes are the encouraged. Send your memes and hangout with other people! Other games: `Fortnite, ROBLOX, and anime.`")
                        .addField("**Development**", "[:bangbang: **SETUP IN PROGRESS!** :bangbang:]")
                        .addField("**Invite**", ":link: https://discord.gg/cQt5BBt")
                        .setFooter("Silkroze Meme World Sponsorship | Silkroze#8250")
                        .setColor(0xfcba03)
                        message.channel.sendEmbed(DillonAlly)
                            case 'help':
                              const embed = new discord.RichEmbed()
                              .setThumbnail(message.author.avatarURL)
                               .setTitle("**Commands**")
                               .setDescription("**[COMING SOONG]**")
                               .setFooter("Bot created by flvurry#0015")
                               .setColor(0xE80101)
                               message.channel.sendEmbed(embed);
   }
    });



bot.login(token);