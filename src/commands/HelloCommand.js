const BaseCommand = require('./BaseCommand');
const config = require('../config/config');

class HelloCommand extends BaseCommand {
    constructor(commandManager) {
        super('hello', 'Saluer l\'utilisateur', 0, commandManager);
    }

    async execute(channel, tags, message, client) {
        const username = tags.username;
        
        if (tags['self']) {
            await client.say(channel, `Pourquoi tu te dis bonjour à toi même ? Imbécile ...`);
            return;
        }

        if (config.features.goldList.isGoldUser(username)) {
            await client.say(channel, `Salut ${username}, le pure beau gosse !`);
        } else {
            await client.say(channel, `Bonjour ${username} !`);
        }
    }
}

module.exports = HelloCommand; 