require('dotenv').config();

module.exports = {
	token: process.env.TOKEN,
	clientID: process.env.CLIENT_ID,
	ownerID: process.env.OWNER_ID,

	DEFAULT_PROFILE: {
		level: 0,
		xp: 0,
		xpmax: 0,
		title: 'Newborn',
		badges: ['Newborn']
	}
}