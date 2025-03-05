const fs = require('fs').promises;
const path = require('path');

class UserService {
    constructor() {
        this.goldUsers = new Set();
        this.configPath = path.join(__dirname, '../config/goldListUser.js');
        this.loadGoldUsers();
    }

    async loadGoldUsers() {
        try {
            const fileContent = await fs.readFile(this.configPath, 'utf8');
            // Extraction du tableau depuis le contenu du fichier
            const match = fileContent.match(/module\.exports\s*=\s*(\[[^\]]*\])/);
            if (match) {
                const goldList = eval(match[1]); // Sécurisé car le fichier est contrôlé
                if (Array.isArray(goldList)) {
                    this.goldUsers = new Set(goldList.map(user => user.toLowerCase()));
                } else {
                    console.error('Le fichier goldListUser.js doit contenir un tableau');
                }
            } else {
                console.error('Format de fichier invalide');
            }
        } catch (error) {
            console.error('Erreur lors du chargement des utilisateurs dorés:', error);
        }
    }

    async saveGoldUsers() {
        try {
            const goldList = Array.from(this.goldUsers);
            const fileContent = `// Liste des utilisateurs dorés (privilégiés)
// Format: tableau de noms d'utilisateurs Twitch
module.exports = ${JSON.stringify(goldList, null, 4)};`;

            await fs.writeFile(this.configPath, fileContent, 'utf8');
            console.log('Liste des utilisateurs dorés sauvegardée avec succès');
        } catch (error) {
            console.error('Erreur lors de la sauvegarde des utilisateurs dorés:', error);
            throw error;
        }
    }

    isGoldUser(username) {
        return this.goldUsers.has(username.toLowerCase());
    }

    async addGoldUser(username) {
        const normalizedUsername = username.toLowerCase();
        if (!this.goldUsers.has(normalizedUsername)) {
            this.goldUsers.add(normalizedUsername);
            await this.saveGoldUsers();
            console.log(`Utilisateur doré ajouté: ${normalizedUsername}`);
        }
    }

    async removeGoldUser(username) {
        const normalizedUsername = username.toLowerCase();
        if (this.goldUsers.has(normalizedUsername)) {
            this.goldUsers.delete(normalizedUsername);
            await this.saveGoldUsers();
            console.log(`Utilisateur doré supprimé: ${normalizedUsername}`);
        }
    }

    getGoldUsers() {
        return Array.from(this.goldUsers);
    }
}

module.exports = new UserService(); 