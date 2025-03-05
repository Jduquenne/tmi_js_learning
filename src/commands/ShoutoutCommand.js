const BaseCommand = require('./BaseCommand');

class ShoutoutCommand extends BaseCommand {
    constructor(commandManager) {
        super('shoutout', 'Faire un shoutout à un utilisateur', 0, commandManager);
    }

    async execute(channel, tags, message, client) {
        if (message.length === 0) {
            await client.say(channel, "Usage : !shoutout <username>");
            return;
        }

        const targetUser = message[0];
        await client.say(channel, `Allez faire un tour sur la chaîne de ${targetUser} !`);
    }
}

module.exports = ShoutoutCommand; 