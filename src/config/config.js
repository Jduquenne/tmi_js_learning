require('dotenv').config();
const userService = require('../services/UserService');

const config = {
    twitch: {
        username: process.env.TWITCH_USERNAME,
        token: process.env.TWITCH_TOKEN,
        channel: process.env.CHANNEL
    },
    commands: {
        prefix: '!',
        cooldown: 5000 // 5 secondes
    },
    features: {
        goldList: userService
    }
};

module.exports = config; 