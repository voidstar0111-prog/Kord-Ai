module.exports = {
    name: 'schedule',
    category: 'games',
    description: "View the weekly game schedule for The Void.",
    async execute(client, m) {
        const scheduleMessage = 
            `┌┤ 🌐 { THE VOID } 🌐 TIMETABLE ├┐\n\n` +
            `📅 **Weekly Game Lineup** (Sun - Sat)\n\n` +
            `🔮 **Sunday:** Would You Rather (\`.wyr\`)\n` +
            `🖤 **Monday:** Man Crush Monday (\`.mcm\`)\n` +
            `📨 **Tuesday:** Confession Void (\`.confess\`)\n` +
            `👑 **Wednesday:** Woman Crush Wednesday (\`.wcw\`)\n` +
            `💬 **Thursday:** Truth or Dare (\`.truth\` / \`.dare\`)\n` +
            `💥 **Friday:** Smash or Pass (\`.smash\`)\n` +
            `👺 **Saturday:** Lie Detector / Admin Showdown (\`.lie\`)\n\n` +
            `*Drop the command for the day to initiate a session!*`;

        await client.sendMessage(m.chat, { text: scheduleMessage }, { quoted: m });
    }
};
