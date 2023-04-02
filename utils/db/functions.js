const mongoose = require("mongoose");
const chalk = require('chalk');
const { User } = require("./models/index");

module.exports = async (client) => {
    client.createUser = async user => {
        const merged = Object.assign({ _id: new mongoose.Types.ObjectId() }, user);
        const createUser = await new User(merged);
        createUser.save().then(u => console.log(chalk.blue(`[+] ${u.userName} (${u.userID}) started a new adventure.`)));
    };

    client.getUser = async user => {
        const data = await User.findOne({ userID: user.id });
        if(data) return data;
        return client.CONFIG.DEFAULT_PROFILE;
    };

    client.updateUser = async (user, settings) => {
        let data = await client.getUser(user);
        if (typeof data !== "object") data = {};
        for (const key in settings) {
            if (data[key] !== settings[key]) data[key] = settings[key];
        }
        return data.updateOne(settings);
    };

    client.deleteUser = async (user) => {
        const data = await User.findOne({ userID: user.id });
		User.deleteOne(data, function(err) {
			if (err) throw err;
		});
    }
};