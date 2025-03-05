const BaseCommand = require('./BaseCommand');

class QuoteCommand extends BaseCommand {
    constructor(commandManager) {
        super('quote', 'Afficher une citation', 0, commandManager);
    }

    async execute(channel, tags, message, client) {
        const quotes = [
            "La vie est comme un bug, il faut savoir la déboguer.",
            "Le succès, c'est 1% d'inspiration et 99% de transpiration.",
            "Le code est comme l'humour. Si vous devez l'expliquer, c'est qu'il n'est pas bon.",
            "La programmation est l'art de dire à un autre programmeur ce que vous voulez que l'ordinateur fasse.",
            "Le meilleur code est celui que vous n'avez pas à écrire."
        ];
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        await client.say(channel, quote);
    }
}

module.exports = QuoteCommand; 