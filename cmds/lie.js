module.exports = {
    name: "lie",
    category: "games",
    description: "Test if a statement is truth or a lie.",
    async execute(client, m) {
        const statement = m.body.split(" ").slice(1).join(" ");

        if (!statement) {
            return await client.sendMessage(m.chat, { 
                text: "⚠️ *Provide a statement to scan. Usage:* \`.lie [statement]\`*" 
            }, { quoted: m });
        }

        const outcomes = [
            "🟢 **TRUTH:** The scanner detects pure alignment.",
            "🔴 **LIE:** Deception detected. The Void sees through you.",
            "⚫ **UNREADABLE:** The darkness clouded the scan. Try again.",
            "🚨 **ABSOLUTE CAP:** A complete and utter fabrication."
        ];

        const result = outcomes[Math.floor(Math.random() * outcomes.length)];

        const lieMessage = 
            `┌┤ 👺 { THE VOID } LIE DETECTOR ├┐\n\n` +
            `👤 **Target:** @` + m.sender.split('@')[0] + `\n` +
            `🧐 **Statement:** "` + statement + `"\n\n` +
            `⚡ **Scan Result:** ` + result;

        await client.sendMessage(m.chat, { text: lieMessage, mentions: [m.sender] }, { quoted: m });
    }
};
  
