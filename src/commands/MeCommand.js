const BaseCommand = require('./BaseCommand');

class MeCommand extends BaseCommand {
    constructor(commandManager) {
        super('me', 'Action spéciale', 0, commandManager);
    }

    async execute(channel, tags, message, client) {
        await client.action(channel, "salue tout le monde avec style !");
    }
}

module.exports = MeCommand; 