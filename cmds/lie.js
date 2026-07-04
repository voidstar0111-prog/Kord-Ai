const { kord } = require("../core");

kord({
    cmd: "lie",
    desc: "Test if a statement is truth or a lie.",
    type: "group"
}, async (m, text) => {
    // The bot automatically passes 'm' as the first parameter and the message text as the second
    const statement = text;

    if (!statement) {
        return await m.reply("⚠️ *Provide a statement to scan. Usage: lie [statement]*");
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

    await m.reply(lieMessage);
});
