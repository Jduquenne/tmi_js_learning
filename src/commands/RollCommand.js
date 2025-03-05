const BaseCommand = require('./BaseCommand');

class RollCommand extends BaseCommand {
    constructor(commandManager) {
        super('roll', 'Lancer un dé', 0, commandManager);
    }

    async execute(channel, tags, message, client) {
        const roll = Math.floor(Math.random() * 6) + 1;
        await client.say(channel, `${tags.username} a roulé un ${roll} sur un dé à 6 faces !`);
    }
}

module.exports = RollCommand; 