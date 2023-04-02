const mongoose = require("mongoose");
const CONFIG = require("../../../config");

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: String,
    userName: String,
    level: {
        "type": Number,
        "default": CONFIG.DEFAULT_PROFILE.level
    },
    xp: {
        "type": Number,
        "default": CONFIG.DEFAULT_PROFILE.xp
    },
    title: {
        "type": String,
        "default": CONFIG.DEFAULT_PROFILE.title
    },
    badges: {
        "type": Array,
        "default": CONFIG.DEFAULT_PROFILE.badges
    }
})

module.exports = mongoose.model("User", userSchema);