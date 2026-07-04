module.exports = {
    name: "confess",
    category: "group",
    description: "Anonymously drop a confession into the void.",
    async execute(client, m) {
        // Extract the text after the command
        const confessionText = m.body.split(" ").slice(1).join(" ");

        if (!confessionText) {
            return await client.sendMessage(m.chat, { 
                text: "⚠️ *The Void requires substance. Usage:* `.confess [your secret]`" 
            }, { quoted: m });
        }

        // Delete the original message to keep it anonymous if the bot has admin rights
        try {
            await client.sendMessage(m.chat, { delete: m.key });
        } catch (e) {
            // Silently continue if not admin
        }

        const confessionMessage = 
            `┌┤ 📨 { THE VOID } CONFESSION ├┐\n\n` +
            `👁️‍🗨️ *An anonymous soul has spoken:* \n` +
            `"` + confessionText + `"\n\n` +
            `*The secret is now safe within the dark.*`;

        await client.sendMessage(m.chat, { text: confessionMessage });
    }
};
