const aoijs = require("aoi.js")
const fs = require('fs');
const keep_alive = require('./http.js');

const bot = new aoijs.AoiClient({
    token: "token", //process.env['token'], gibi de yapabilirsiniz.
    prefix: "prefix",//istediğiniz prefixi girebilirsiniz.
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INVITES", "GUILD_BANS", "GUILD_MEMBERS"],//elleme
    mobilePlatform: true //botunuzu mobildeymiş gibi gösterir isterseniz silebilirsiniz.
    })


const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./komutlar/")
bot.onEmojiDelete()
bot.onEmojiCreate()
bot.onInviteCreate()
bot.onInviteDelete()
bot.onBanAdd()
bot.onBanRemove()
bot.onRoleCreate()
bot.onRoleDelete()
bot.onChannelCreate()
bot.onChannelDelete()
bot.onMessageDelete()
bot.onMessageUpdate()
bot.onJoin()
bot.onLeave()



//Events
bot.onMessage()

bot.status({
    text: "Holms Kayıt Altyapısı <:limon:1016758552867635200",
    type: "COMPETING",//PLAYING-WATCHING-LISTENING-STREAMING-COMPETING
                      //oynuyor-izliyor-dinliyor-yayında-yarışıyor
    status: "online", //idle-online-dnd-streaming
    time: 12
  })

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Bot Hazır $userTag[$clientID]]`
})



// HoşGeldin 
bot.joinCommand({
    channel:"1020058894728433705", //HoşGeldin kanalı ID'si
    code:`
    **Sunucuya Hoş geldin <@$authorID> \`($authorID)\`**
    Seninle birlikte sunucumuz toplam **$membersCount** kişiye ulaşmış bulunmakta!
    Hesabın \`$creationDate[$authorID]\` tarihinde oluşturulmuş.
    **Kurallar sunucunun düzenini sağlamak için konulmuştur.**
    <#1019690772565610567> kanalından kurallarımızı okumayı ihmal etme. 
        Sunucuya erişebilmek için teyit kanallarında teyit vermen gerekiyor <@&1020058833281876059> rolündeki yetkilililer seninle ilgilenicektir.
    **İyi Eğlenceler.**
    `
    }) 
