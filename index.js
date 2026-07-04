const { sock } = require("./core/sock")
const { getPlatformInfo } = require("./core/dclient")
const { spawn } = require("child_process")
const http = require("http")
const cron = require("node-cron")

const run = async () => {
    try {
        const platform = getPlatformInfo?.().platform?.toLowerCase() || ""
        if (!platform.includes("pterodactyl")) {
            const server = http.createServer((req, res) => {
                res.writeHead(200, { "Content-Type": "text/plain" })
                res.end("Bot is running\n")
            })
            const PORT = process.env.PORT || 5000
            server.listen(PORT, () => {
                console.log(`Listening on port ${PORT}`)
            })
        }

        await sock()
        console.log("Ruthless Emperor: Socket connected. Initializing daily schedule...")

        cron.schedule('0 8 * * *', async () => {
            try {
                if (global.client) {
                    const groupJid = '120363407966533696@g.us'; 
                    const announcement = "👑 *RUTHLESS EMPEROR DAILY BLAST*\n\nThe Void demands your presence. Check the pinned messages for today's required tribute.";
                    await global.client.sendMessage(groupJid, { text: announcement });
                    console.log("Daily blast sent successfully.");
                }
            } catch (err) {
                console.error("Blast failed:", err);
            }
        }, { timezone: "Africa/Lagos" });

    } catch (e) {
        console.error("Critical Failure:", e)
    }
}
run()
                      
