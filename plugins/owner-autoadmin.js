const handler = async (m, {conn, isAdmin}) => {
  if (m.fromMe) return;
  if (isAdmin) throw '💖 *listo amo usted ya es admin*';
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  } catch {
    await m.reply('📍 *Ocurrió Un Error*');
  }
};
handler.command = /^(tenerpoder|autoadmin)$/i;
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
