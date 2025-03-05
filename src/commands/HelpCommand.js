const BaseCommand = require('./BaseCommand');

class HelpCommand extends BaseCommand {
    constructor(commandManager) {
        super('help', 'Affiche toutes les commandes disponibles', 0, commandManager);
    }

    async execute(channel, tags, message, client) {
        const commands = this.commandManager.getCommandList();
        
        const helpMessage = `[Available Commands] ` +
            commands.map(cmd => `${cmd.name}: ${cmd.description}`).join(" | ");
        
        await client.say(channel, helpMessage);
    }
}

module.exports = HelpCommand; 