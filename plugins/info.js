let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Made in javascript via NodeJs
╠➥ Rec: ᴍʀ.ʀᴀᴠᴀɴᴀɴ [ ʀᴀɴᴊɪᴛʜ.ᴍ ]
╠➥ Script: ᴍʀ ʀᴀᴠᴀɴᴀɴ ™
║      [ᴅᴏɴᴛ ᴇᴅɪᴛ ᴄʀᴇᴅɪᴛs / ᴄʜᴇᴄᴋ  ʟɪᴄᴇɴsᴇ ]
╠➥ ㄚㄖ凵ㄒ凵乃乇: https://youtube.com/c/MrRavanan
╠➥ ㄚㄖ凵ㄒ凵乃乇 2几ᗪ 匚卄: https://youtube.com/channel/UChVky9HwaivYVdQRMCrM9Ig
╠➥ 丨几丂ㄒ卂Ꮆ尺卂爪: https://instagram.com/__mr_ravanan?igshid=1lu9qhoz5czrn
║
╠═〘 Thanks To 〙 ═
╠➥ ɪɴᴅᴏɴᴇsɪᴀ ™
╠➥ ᴍʀ ʀᴀᴠᴀɴᴀɴ ™
╠➥ ᴍᴀʟᴀʏᴀʟɪᴢᴢ / ʏᴛ sᴜᴘᴘᴏʀᴛᴇʀs
╠➥ And other friends :)
║
╠═〘 support ™ 〙 ═
╠➥ https://youtube.com/c/MrRavanan
╠➥ https://youtube.com/channel/UChVky9HwaivYVdQRMCrM9Ig
╠➥ send message : wa.me//+919048410619
║
║>ɪғ ʏᴏɪ ʜᴀᴠᴇ ᴀɴʏ ɪssᴜᴇ sᴇɴᴅ ᴍᴇssᴀɢᴇ? wa.me//+919048410619
║
╠═〘 ʀ@ᴠ@ɴ@ɴ BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

