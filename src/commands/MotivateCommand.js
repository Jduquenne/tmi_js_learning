const BaseCommand = require('./BaseCommand');

class MotivateCommand extends BaseCommand {
    constructor(commandManager) {
        super('motivate', 'Donner de la motivation', 0, commandManager);
    }

    async execute(channel, tags, message, client) {
        const motivations = [
            "N'abandonne jamais, continue à te battre !",
            "Tu es plus fort que tu ne le penses !",
            "Chaque jour est une nouvelle opportunité !",
            "Crois en toi, tu peux le faire !",
            "Le succès est au bout de tes efforts !"
        ];
        const motivation = motivations[Math.floor(Math.random() * motivations.length)];
        await client.say(channel, motivation);
    }
}

module.exports = MotivateCommand; 