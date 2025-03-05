const BaseCommand = require('./BaseCommand');

class UptimeCommand extends BaseCommand {
    constructor(commandManager) {
        super('uptime', 'Display stream uptime', 0, commandManager);
    }

    async execute(channel, tags, message, client) {
        // TODO: Implement real stream uptime logic using Twitch API
        await client.say(channel, "The stream has been live for 2 hours.");
    }
}

module.exports = UptimeCommand; 