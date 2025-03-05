const tmi = require('tmi.js');
const config = require('./config/config');
const EventManager = require('./events/EventManager');

class TwitchBot {
    constructor() {
        this.client = new tmi.Client({
            identity: {
                username: config.twitch.username,
                password: config.twitch.token
            },
            channels: [config.twitch.channel]
        });

        this.eventManager = new EventManager(this.client);
    }

    async start() {
        try {
            await this.client.connect();
            console.log('Bot démarré avec succès !');
        } catch (error) {
            console.error('Erreur lors du démarrage du bot:', error);
            process.exit(1);
        }
    }
}

// Démarrage du bot
const bot = new TwitchBot();
bot.start(); 