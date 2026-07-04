module.exports = {
    name: 'schedule',
    category: 'games',
    description: 'View the weekly game schedule for The Void',
    async execute(client, m) {
        const scheduleMessage = `
╭───「 《♤ THE VOID ♤》 TIMETABLE 」
│ 
│ 🗓️ **Weekly Game Lineup** (Sun - Sat)
│ 
│ 🌌 **Sunday:** Would You Rather (`.wyr`)
│ 🖤 **Monday:** Man Crush Monday (`.mcm`)
│ 👁️ **Tuesday:** Confession Void (`.confess`)
│ 👑 **Wednesday:** Woman Crush Wednesday (`.wcw`)
│ 💬 **Thursday:** Truth or Dare (`.truth` / `.dare`)
│ 💀 **Friday:** Smash or Pass (`.smash`)
│ 🚨 **Saturday:** Lie Detector / Admin Showdown (`.lie`)
│ 
╰───────────────────────────
*Drop the command for the day to initiate a session!*`;

        await client.sendMessage(m.chat, { text: scheduleMessage }, { quoted: m });
    }
};
