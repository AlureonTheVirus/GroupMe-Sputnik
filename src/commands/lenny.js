module.exports = {
    alias : [],
    description : "Posts a lenny face.",
    usage : "!lenny",
    args : 0,
    roles : "all",
    channels : "all",
    requiresAuth : 0,
    cooldown: 6000,
    execute : async (bot, args, msg) => {
        let lennys = [
            "( ͡° ͜ʖ ͡°)",
            "( ͡° ل͜ ͡°)",
            "( ° ͜ʖ °)",
            "( ‾ʖ̫‾)",
            "☞ó ͜つò☞",
            "(˵ ͡° ͜ʖ ͡°˵)",
            "( ͠° ͟ʖ ͠°)",
            "( ͠° ͟ʖ ͡°)",
            "(ᴗ ͜ʖ ᴗ)",
            "( ͡° ͜ʖ ͡ – ✧)",
            "( ͠° ͟ ͜ʖ ͡ ͠°)",
            "(˵ ͡o ͜ʖ ͡o˵)",
            "(⟃ ͜ʖ ⟄)",
            "(✿◠‿◠)",
            "( ° ᴗ°)~ð (/❛o❛\)",
            "( ＾◡＾)っ✂❤",
            "( ͡° ͜ʖ ͡°)╭∩╮",
            "（￣ε￣ʃƪ）",
            "•́ε•̀٥",
            "(͠≖ ͜ʖ͠≖)ε｀●)",
            "( ͠° ͟ʖ ͡°)",
            "( ͡~ ͜ʖ ͡°)",
            "( ° ͜ʖ °)",
            "( ͡ᵔ ͜ʖ ͡ᵔ )",
            "(╯ ͠° ͟ʖ ͡°)╯┻━┻ ",
            "( ͡ʘ ͜ʖ ͡ʘ)",
            "( ͡o ͜ʖ ͡o)",
            "(ง ͡ʘ ͜ʖ ͡ʘ)ง",
            "(ง ͠° ͟ل͜ ͡°)ง",
            "(͠≖ ͜ʖ͠≖)",
            "( ͡° ʖ̯ ͡°)",
            "(ᴗ ͜ʖ ᴗ)",
            "(‡▼益▼)",
            "(‡ಠ╭╮ಠ)",
            "(｀∀´)Ψ ",
            "¯\_( ͡° ͜ʖ ͡°)_/¯",
            "¯\_(ツ)_/¯",
            "( •̀ᴗ•́ )و ̑̑",
            "ʚ(*´꒳`*)ɞ",
            "ಠ▄ಠ",
            "ᕦ(ò_óˇ)",
            "(☞ ͡° ͜ʖ ͡°)☞",
            "ᕦ( ͡° ͜ʖ ͡°)ᕤ",
            "٩(^ᴗ^)۶",
            "ᕕ( ͡° ͜ʖ ͡°)ᕗ",
            "(☝◞‸◟)☞",
            "ᕕ( ᐛ )ᕗ",
            "ᕕ( ཀ ʖ̯ ཀ)ᕗ",
            "ᕙ(▀̿̿Ĺ̯̿̿▀̿ ̿) ᕗ",
            "ლ(´ڡ`ლ)",
            "(╬ಠ益ಠ)",
            "(ó﹏ò｡)",
            "(´･_･`)",
            "凸( •̀_•́ )凸",
            "( ‾ ʖ̫ ‾)",
            "✌.|•͡˘‿•͡˘|.✌",
            "ฅ^•ﻌ•^ฅ",
            "┌П┐(►˛◄’!)",
            "ヽ(ﾟДﾟ)ﾉ",
            "┬┴┤( ͡⚆ل͜├┬┴┬ ",
            "ཀ ʖ̯ ཀ",
            "ಠ╭╮ಠ",
            "(ᗒᗣᗕ)՞",
            "ಥ_ಥ",
            "凸༼ຈل͜ຈ༽凸",
            "ɿ(｡･ɜ･)ɾⓌⓗⓨ?",
            "щ（ﾟДﾟщ）",
            "(｢๑•₃•)｢ ʷʱʸ?",
            "◕‿↼",
            "( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)",
        ];

        await bot.send(msg.conversation_id, lennys[Math.floor(Math.random()*lennys.length)], [
            {
                "type": "reply",
                "reply_id": msg.id,
                "base_reply_id": msg.id,
            }
        ]);
    }
};