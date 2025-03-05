const CommandManager = require('../commands/CommandManager');

class EventManager {
    constructor(client) {
        this.client = client;
        this.commandManager = new CommandManager();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Base events
        this.client.on('message', this.handleMessage.bind(this));
        this.client.on('connected', this.handleConnected.bind(this));
        this.client.on('disconnected', this.handleDisconnected.bind(this));
        this.client.on('reconnect', this.handleReconnect.bind(this));
        
        // Presence events
        this.client.on('join', this.handleJoin.bind(this));
        this.client.on('part', this.handlePart.bind(this));
        this.client.on('roomstate', this.handleRoomstate.bind(this));
        
        // Subscription events
        this.client.on('subscription', this.handleSubscription.bind(this));
        this.client.on('resub', this.handleResub.bind(this));
        this.client.on('subgift', this.handleSubgift.bind(this));
        this.client.on('submysterygift', this.handleSubmysterygift.bind(this));
        
        // Bits and hosting events
        this.client.on('cheer', this.handleCheer.bind(this));
        this.client.on('hosted', this.handleHosted.bind(this));
        this.client.on('raided', this.handleRaided.bind(this));
        
        // System events
        this.client.on('notice', this.handleNotice.bind(this));
    }

    async handleMessage(channel, tags, message, self) {
        if (self) return;
        await this.commandManager.handleMessage(channel, tags, message, this.client);
    }

    handleConnected(address, port) {
        console.log(`Connecté à ${address}:${port}`);
    }

    handleDisconnected(reason) {
        console.log(`Déconnecté: ${reason}`);
    }

    handleReconnect() {
        console.log('Reconnexion au serveur Twitch...');
    }

    // Presence event handlers
    handleJoin(channel, username, self) {
        if (self) {
            console.log(`Bot connecté au canal ${channel}`);
        } else {
            console.log(`${username} a rejoint le canal ${channel}`);
        }
    }

    handlePart(channel, username, self) {
        if (!self) {
            console.log(`${username} a quitté le canal ${channel}`);
        }
    }

    handleRoomstate(channel, state) {
        console.log(`État de la salle ${channel} mis à jour:`, state);
    }

    // Subscription event handlers
    handleSubscription(channel, username, method, message, userstate) {
        console.log(`${username} s'est abonné à ${channel}!`);
        this.client.say(channel, `Merci ${username} pour l'abonnement!`);
    }

    handleResub(channel, username, months, message, userstate, methods) {
        console.log(`${username} a renouvelé son abonnement pour ${months} mois!`);
        this.client.say(channel, `Merci ${username} pour le renouvellement de ${months} mois!`);
    }

    handleSubgift(channel, username, streakMonths, recipient, methods, userstate) {
        console.log(`${username} a offert un abonnement à ${recipient}!`);
        this.client.say(channel, `Merci ${username} pour l'abonnement offert à ${recipient}!`);
    }

    handleSubmysterygift(channel, username, numbOfSubs, methods, userstate) {
        console.log(`${username} a offert ${numbOfSubs} abonnements mystères!`);
        this.client.say(channel, `Merci ${username} pour les ${numbOfSubs} abonnements mystères!`);
    }

    // Bits and hosting event handlers
    handleCheer(channel, userstate, message) {
        const bits = userstate.bits;
        const username = userstate['display-name'];
        console.log(`${username} a envoyé ${bits} bits!`);
        this.client.say(channel, `Merci ${username} pour les ${bits} bits!`);
    }

    handleHosted(channel, username, viewers, autohost) {
        console.log(`${username} héberge la chaîne avec ${viewers} spectateurs!`);
        this.client.say(channel, `Merci ${username} pour l'hébergement avec ${viewers} spectateurs!`);
    }

    handleRaided(channel, username, viewers) {
        console.log(`${username} raid la chaîne avec ${viewers} spectateurs!`);
        this.client.say(channel, `Merci ${username} pour le raid avec ${viewers} spectateurs!`);
    }

    // System event handlers
    handleNotice(channel, msgid, message) {
        console.log(`System notice [${msgid}]: ${message}`);
    }
}

module.exports = EventManager; 