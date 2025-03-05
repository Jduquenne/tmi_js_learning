const BaseCommand = require('./BaseCommand');

class JokeCommand extends BaseCommand {
    constructor(commandManager) {
        super('joke', 'Raconter une blague', 0, commandManager);
    }

    async execute(channel, tags, message, client) {
        const jokes = [
            "Pourquoi les développeurs n'aiment-ils pas la nature ? Trop de bugs !",
            "Quel est le comble pour un programmeur ? Ne pas avoir de class.",
            "Pourquoi les développeurs sont-ils mauvais en cuisine ? Ils ne savent pas gérer les exceptions !",
            "Qu'est-ce qu'un développeur fait quand il a faim ? Il mange des bugs !",
            "Pourquoi les développeurs préfèrent-ils le noir ? Parce que c'est plus facile à déboguer !"
        ];
        const joke = jokes[Math.floor(Math.random() * jokes.length)];
        await client.say(channel, joke);
    }
}

module.exports = JokeCommand; 