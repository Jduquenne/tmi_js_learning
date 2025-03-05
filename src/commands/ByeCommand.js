const BaseCommand = require('./BaseCommand');

class ByeCommand extends BaseCommand {
    constructor(commandManager) {
        super('bye', 'Dire au revoir', 0, commandManager);
    }

    async execute(channel, tags, message, client) {
        await client.say(channel, `Au revoir ${tags.username} !`);
    }
}

module.exports = ByeCommand; 