const BaseCommand = require('./BaseCommand');
const config = require('../config/config');

class TimeoutCommand extends BaseCommand {
    constructor(commandManager) {
        super('timeout', 'Timeout a user', 0, commandManager);
    }

    async execute(channel, tags, message, client) {
        // Check if user is moderator
        if (!tags.mod && !tags['user-id']) {
            await client.say(channel, "Sorry, only moderators can use this command.");
            return;
        }

        if (message.length < 2) {
            await client.say(channel, "Usage: !timeout <username> <duration_in_seconds>");
            return;
        }

        const targetUser = message[0];
        const duration = parseInt(message[1], 10);

        if (isNaN(duration) || duration <= 0) {
            await client.say(channel, "Duration must be a positive number.");
            return;
        }

        try {
            await client.timeout(channel, targetUser, duration, "Timeout command");
            await client.say(channel, `${targetUser} has been timed out for ${duration} seconds.`);
        } catch (error) {
            console.error(`Error timing out ${targetUser}:`, error);
            await client.say(channel, `Error timing out ${targetUser}.`);
        }
    }
}

module.exports = TimeoutCommand; 