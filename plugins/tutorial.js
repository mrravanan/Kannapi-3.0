let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial BOT :
Credit: *~[ᴍʀ.ʀᴀᴠᴀɴᴀɴ]*
make your own what's app bot = https://youtube.com/c/MrRavanan
Check all videos and learn
 what is termux : https://youtu.be/y1encEbGuAM
*[TERMUX]*
1) $pkg install git
2) $pkg install ffmpeg
3) $pkg install imagemagick
4) $pkg install nodejs

For the Github ..
5) $git clone https://github.com/mrravanan/kannapi-2.0.git
6) $ls
7) $cd kannapi-2.0

the *last* ..
Penginstalannya cuy :)
8) npm i
9) node index.js

_Can you see the tutorial on_
*Our Youtube:*
https://youtube.com/c/MrRavanan
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['about']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

