let media = './Menu7.png'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '📇', key: m.key } })
let str = `*🔮 GRUPOS OFICIALES*

    *_╭━━━⊜ GenshinBot-MD_*
  *_┃🌩❏ ${gp1}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

 *🔮 MAS GRUPOS*

    *_╭━━━⊜ grupo de links_*
  *_┃🌦❏ ${gp2}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

    *_╭━━━⊜ grupo de roll_*
  *_┃🌦❏ ${gp3}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

*_╭━━━⊜ fans de la aviacion_*
┃🌦❏https://chat.whatsapp.com/CLqUSRzmHK7L8d6V61EYnV
*_╰━━━━━━━━━━━━━━━━⊜_*


    *_╭━━━⊜ Canal GenshinBot-MD_*
  *_┃🌦❏ ${channel}_*
*_╰━━━━━━━━━━━━━━━━⊜_*`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}

handler.command = /^grupos|linksk|gruposofc|gruposoficiales$/i
handler.register = true
handler.exp = 33

export default handler
