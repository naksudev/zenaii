const mongoose = require("mongoose");
const config = require("../../../config");

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: String,
    level: {
        "type": Number,
        "default": config.DEFAULT_PROFILE.level
    },
    xp: {
        "type": Number,
        "default": config.DEFAULT_PROFILE.xp
    },
    xp_max: {
        "type": Number,
        "default": config.DEFAULT_PROFILE.xpmax 
    },
    stats: {
        hp: Number,
        atk: Number,
        def: Number
    },
    title: {
        "type": String,
        "default": config.DEFAULT_PROFILE.title
    },
    badges: {
        "type": Array,
        "default": config.DEFAULT_PROFILE.badges
    }
})

module.exports = mongoose.model("User", userSchema);