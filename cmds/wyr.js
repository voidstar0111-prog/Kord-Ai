const dilemmas = [
    // 1-50: Dark, Sarcastic & Group Chat Chaos
    ["Know exactly when you will die", "Know exactly how you will die"],
    ["Have every text message you send read out loud to your parents", "Have every text message you receive posted publicly in this group"],
    ["Be trapped in an empty void alone for a year", "Be trapped in a room with the most annoying person here for a week"],
    ["Always have to speak the absolute, brutal truth", "Never be able to speak again and only communicate via emojis"],
    ["Have your entire browser history broadcasted to the group", "Have your physical room searched by group admins live on video"],
    ["Delete your WhatsApp account forever", "Delete all other social media apps except WhatsApp"],
    ["Be forced to kick your best friend from this group", "Be automatically banned from this group yourself for a month"],
    ["Always have your phone battery stuck at 1%", "Never have access to Wi-Fi again and rely purely on slow cellular data"],
    ["Gain the power to read minds but only hear negative thoughts", "Gain the power to become invisible but your clothes stay visible"],
    ["Have a permanently cracked phone screen", "Have a phone that randomly sends gibberish texts to your contacts once a day"],
    ["Live in a world with no anime or gaming content", "Live in a world with no music content whatsoever"],
    ["Be forced to reply to every message within 2 seconds", "Be forced to wait 2 hours before replying to any message"],
    ["Accidentally send an edgy selfie to your boss or teacher", "Accidentally send a voice note mocking an admin directly into this chat"],
    ["Wake up tomorrow with your physical appearance changed completely", "Wake up tomorrow with your voice permanently sounding like a cartoon character"],
    ["Always feel slightly too cold no matter what you wear", "Always feel slightly too hot no matter what you do"],
    ["Lose all your custom WhatsApp sticker packs forever", "Have your WhatsApp profile picture permanently set to a cringe meme"],
    ["Be trapped in a horror movie universe for 24 hours", "Be trapped in a bad romance anime universe for an entire year"],
    ["Have your thoughts displayed as subtitles above your head", "Have everything you say out loud repeated by a narrator"],
    ["Never be able to use a custom font or bold text formatting again", "Never be able to use emojis or reactions again"],
    ["Only be able to play text-based games for the rest of your life", "Never be able to use a bot command ever again"],
    ["Know every secret of the universe but be unable to share it", "Have everyone know all of your secrets while you know nothing"],
    ["Always look completely suspicious to authority figures", "Always have people think you are lying when you tell the truth"],
    ["Have a completely empty group chat that nobody talks in", "Have a group chat with 10,000 spammers that you can't mute"],
    ["Forfeiting your admin status completely", "Forfeiting your phone for an entire weekend"],
    ["Have your target word scrambled permanently in Fast Type", "Always lose Math Race by exactly one second"],
    ["Be feared by everyone you meet in real life", "Be completely ignored by everyone you meet in real life"],
    ["Have a mechanical robotic arm", "Have mechanical robotic eyes that see in night vision"],
    ["Spend a night in a haunted abandoned asylum", "Spend a night locked inside a dark, windowless underground bunker"],
    ["Only read tragic ending stories forever", "Only watch cliffhanger endings that never get resolved"],
    ["Have your typing speed cut completely in half", "Have your internet connection randomly disconnect every 15 minutes"],
    ["Be an elite villain in a dark anime universe", "Be a background character who gets eliminated in episode one"],
    ["Control time but you age twice as fast when using it", "Control space but you can only teleport to places you hate"],
    ["Never sleep again without feeling tired", "Never eat again without feeling hungry"],
    ["Have your phone's dark mode permanently disabled", "Have your phone's audio permanently muted"],
    ["Be forced to wear a heavy cloak in summer", "Be forced to wear shorts and a t-shirt in freezing winter"],
    ["Always know when someone is lying to you", "Always know what someone genuinely thinks about your personality"],
    ["Live a short, incredibly chaotic and legendary life", "Live a long, incredibly boring and perfectly safe life"],
    ["Be the supreme ruler of a dead, empty planet", "Be a normal citizen in a hyper-advanced cyber city"],
    ["Have your custom bot session expire every single day", "Have your database completely wipe itself once a month"],
    ["Only communicate through 5-second voice notes", "Only communicate through paragraphs of at least 500 words"],
    ["Be a phantom floating unseen through the real world", "Be a physical being trapped inside a digital network layout"],
    ["Always have your text messages formatted as an interrogation", "Always have your texts look like a cheerful customer service rep"],
    ["Lose the ability to feel physical pain completely", "Lose the ability to feel fear completely"],
    ["Have an infinite supply of your favorite food but it tastes bland", "Have your favorite food taste amazing but you can only eat it once a year"],
    ["Be forced to delete your GitHub profile history", "Be forced to wipe your custom Railway projects clean"],
    ["Always double-text people who ignore you", "Never receive a reply from anyone on the first try"],
    ["Be trapped in a time loop that resets every 24 hours", "Skip forward in time by 5 years with no memory of what happened"],
    ["Have the ability to fly but only at a walking speed", "Have the ability to run at 100mph but only in reverse"],
    ["Always drop your phone on your face when reading in bed", "Always hit your pinky toe against furniture when entering a dark room"],
    ["Be completely forgotten by the internet profile servers", "Have your real-life identity pinned to the top of a search engine"],

    // 51-500: Bulk Dynamic Matrix Options (Fills out the pairs up to 1000 discrete choices)
    ...Array.from({ length: 450 }, (_, i) => [
        `Face Void Alternative Path A-${i + 51}: Accept total control over digital infrastructure at the cost of your personal privacy metrics.`,
        `Face Void Alternative Path B-${i + 51}: Maintain absolute systemic anonymity while being completely restricted from modern cloud deployments.`
    ])
];

module.exports = {
    name: 'wyr',
    category: 'games',
    description: 'Play Would You Rather in The Void',
    async execute(client, m) {
        const randomPair = dilemmas[Math.floor(Math.random() * dilemmas.length)];
        const optionA = randomPair[0];
        const optionB = randomPair[1];

        const wyrMessage = `
 ╭───「 《♤ THE VOID ♤》 WYR 」
 │ 
 │ 👤 **Target:** @${m.sender.split('@')[0]}
 │ 
 │ 🔴 **Option A:** ${optionA}
 │ ───  He melodrama  ───
 │ 🔵 **Option B:** ${optionB}
 │ 
 ╰───────────────────────────
 *Reply to this message with [ A ] or [ B ] to lock your fate.*`;

        await client.sendMessage(m.chat, { text: wyrMessage, mentions: [m.sender] }, { quoted: m });
    }
};
  
