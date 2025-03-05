const config = require('../config/config');
const HelloCommand = require('./HelloCommand');
const ByeCommand = require('./ByeCommand');
const UptimeCommand = require('./UptimeCommand');
const JokeCommand = require('./JokeCommand');
const RollCommand = require('./RollCommand');
const QuoteCommand = require('./QuoteCommand');
const ShoutoutCommand = require('./ShoutoutCommand');
const MotivateCommand = require('./MotivateCommand');
const HelpCommand = require('./HelpCommand');
const MeCommand = require('./MeCommand');
const TimeoutCommand = require('./TimeoutCommand');

class CommandManager {
    constructor() {
        this.commands = new Map();
        this.registerCommands();
    }

    registerCommands() {
        // Register all commands
        this.registerCommand(new HelloCommand(this));
        this.registerCommand(new ByeCommand(this));
        this.registerCommand(new UptimeCommand(this));
        this.registerCommand(new JokeCommand(this));
        this.registerCommand(new RollCommand(this));
        this.registerCommand(new QuoteCommand(this));
        this.registerCommand(new ShoutoutCommand(this));
        this.registerCommand(new MotivateCommand(this));
        this.registerCommand(new HelpCommand(this));
        this.registerCommand(new MeCommand(this));
        this.registerCommand(new TimeoutCommand(this));
    }

    registerCommand(command) {
        this.commands.set(command.name, command);
    }

    async handleMessage(channel, tags, message, client) {
        if (!message.startsWith(config.commands.prefix)) {
            return;
        }

        const args = message.slice(config.commands.prefix.length).trim().split(' ');
        const commandName = args[0].toLowerCase();
        const command = this.commands.get(commandName);

        if (!command) {
            return;
        }

        if (!command.canExecute(tags.username)) {
            await client.say(channel, `@${tags.username}, please wait before using this command again.`);
            return;
        }

        try {
            await command.execute(channel, tags, args.slice(1), client);
        } catch (error) {
            console.error(`Error executing command ${commandName}:`, error);
            await client.say(channel, `An error occurred while executing the command.`);
        }
    }

    getCommandList() {
        return Array.from(this.commands.values()).map(cmd => ({
            name: cmd.name,
            description: cmd.description
        }));
    }
}

module.exports = CommandManager; 