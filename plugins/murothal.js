let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
MR RAVANAN VIDEOS PLAYLIST:
SUPPORT{RANJITH}

*ʏᴏᴜᴛᴜʙᴇ:*
_~https://youtube.com/c/MrRavanan_

ᴛᴇʀᴍᴜx ɴᴇᴡ ᴛᴏᴏʟs ᴀɴᴅ sᴄʀɪᴘᴛ [ᴘʟᴀʏʟɪsᴛ]⇨ https://youtube.com/playlist?list=PLXI_OgWidZkWteWpz5wfttOd3lmYmHBCY
ɪɴsᴛᴀɢʀᴀᴍ ғʀᴇᴇ ʙᴏᴛ sᴄʀɪᴘᴛ ⇨ https://youtu.be/cNCMXThkpd4
ᴡʜᴀᴛs ᴀᴘᴘ ʙᴏᴛ sᴄʀɪᴘᴛ ⇨ https://youtu.be/tD_6JgA9Gmc
ɪɴsᴛᴀɢʀᴀᴍ ғʀᴇᴇ ғᴏʟʟᴏᴡᴇʀs ᴠɪᴅᴇᴏs [ᴘʟᴀʏʟɪsᴛ] ⇨ https://youtube.com/playlist?list=PLXI_OgWidZkWjIXlfkQ8HpF8dUJ46vJza
ʜᴏᴡ ᴛᴏ ɢᴇᴛ ғᴀᴋᴇ ᴡʜᴀᴛs ᴀᴘᴘ ɴᴜᴍʙᴇʀs [ᴘʟᴀʏʟɪsᴛ]⇨ https://youtube.com/playlist?list=PLXI_OgWidZkU35XPL64coDqNMEtktTJwR
kali nethunter installation android ⇨ https://youtu.be/He5wqMb3E_g
`.trim(), m)
}
handler.help = ['murothal']
handler.tags = ['quotes']
handler.command = /^(murothal)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

