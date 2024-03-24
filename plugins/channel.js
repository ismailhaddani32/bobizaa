let handler = async (m, { conn }) => {

m.reply(`*قناتي على الواتساب:*\n
*https://chat.whatsapp.com/DfG1Of7xsQjImcGsI8c1zI*
*تابعني هناك♥*`)
}
handler.help = ['channel']
handler.tags = ['infobot']
handler.command = /^(channel)$/i

export default handler;
