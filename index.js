const { sock } = require("./core/sock")
const { getPlatformInfo } = require("./core/dclient")
const { spawn } = require("child_process")
const http = require("http")
const cron = require("node-cron")

// Workaround function to dig out the obfuscated client from Node's require cache
const locateHiddenClient = () => {
    for (const key in require.cache) {
        const exports = require.cache[key]?.exports;
        if (exports && typeof exports === 'object') {
            // Scan properties to look for a Baileys socket connection object
            for (const prop in exports) {
                if (exports[prop] && typeof exports[prop].sendMessage === 'function') {
                    return exports[prop];
                }
            }
        }
    }
    return null;
}

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

        // 1. Boot up the obfuscated socket connection
        await sock()
        console.log("Ruthless Emperor: Socket initialization triggered...")

        // 2. Wait 5 seconds for the bot to authenticate and populate memory, then grab it
        setTimeout(() => {
            const hiddenClient = locateHiddenClient();
            if (hiddenClient) {
                global.client = hiddenClient;
                console.log("🎯 Success: Intercepted connection and assigned to global.client!");
            } else {
                console.log("⚠️ Warning: Connection wrapper not found in cache yet. Will retry on blast.");
            }
        }, 5000);

        // 3. The Daily Scheduler
        cron.schedule('0 8 * * *', async () => {
            try {
                // Final fallback check if it hadn't loaded after 5 seconds during startup
                if (!global.client) {
                    global.client = locateHiddenClient();
                }

                if (global.client) {
                    const groupJid = '120363407966533696@g.us'; 
                    const announcement = "👑 *RUTHLESS EMPEROR DAILY BLAST*\n\nThe Void demands your presence. Check the pinned messages for today's required tribute.";
                    await global.client.sendMessage(groupJid, { text: announcement });
                    console.log("Daily blast sent successfully.");
                } else {
                    console.error("Blast failed: Could not extract the bot connection from the hidden core files.");
                }
            } catch (err) {
                console.error("Blast failed during execution:", err);
            }
        }, { timezone: "Africa/Lagos" });

    } catch (e) {
        console.error("Critical Failure:", e)
    }
}
run()
                
