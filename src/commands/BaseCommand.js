class BaseCommand {
    constructor(name, description, cooldown = 0, commandManager = null) {
        this.name = name;
        this.description = description;
        this.cooldown = cooldown;
        this.lastUsed = new Map();
        this.commandManager = commandManager;
    }

    canExecute(username) {
        if (this.cooldown === 0) return true;
        
        const lastUse = this.lastUsed.get(username) || 0;
        const now = Date.now();
        
        if (now - lastUse < this.cooldown) {
            return false;
        }
        
        this.lastUsed.set(username, now);
        return true;
    }

    async execute(channel, tags, message, client) {
        throw new Error('The execute method must be implemented by child classes');
    }
}

module.exports = BaseCommand; 