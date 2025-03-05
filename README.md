# TMI.js Learning - Bot Twitch

Un bot Twitch simple créé avec TMI.js pour interagir avec le chat Twitch.

## 🚀 Fonctionnalités

- Connexion automatique au chat Twitch
- Système de commandes personnalisables
- Liste d'utilisateurs privilégiés (goldList)
- Réponses automatiques aux messages du chat

## ⚙️ Installation

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/tmi_js_learning.git
cd tmi_js_learning
```

2. Installez les dépendances :
```bash
npm install
```

3. Configurez les variables d'environnement :
   - Copiez le fichier `.env.example` en `.env`
   - Remplissez les informations suivantes :
```env
TWITCH_USERNAME=votre_bot_username
TWITCH_OAUTH_TOKEN=oauth:votre_token
TWITCH_CHANNEL=votre_channel
```

4. Configurez la liste des utilisateurs privilégiés :
   - Copiez `src/config/goldListUser.example.js` vers `src/config/goldListUser.js`
   - Ajoutez les noms d'utilisateurs Twitch souhaités

## 🔧 Configuration

### Variables d'environnement (.env)
- `TWITCH_USERNAME` : Nom d'utilisateur du bot
- `TWITCH_OAUTH_TOKEN` : Token OAuth du bot (généré sur https://twitchapps.com/tmi/)
- `TWITCH_CHANNEL` : Nom de la chaîne où le bot sera actif

### Liste des utilisateurs privilégiés
Dans `goldListUser.js`, ajoutez les utilisateurs qui auront accès aux commandes privilégiées :
```javascript
module.exports = [
    'utilisateur1',
    'utilisateur2'
];
```

## 🚀 Démarrage

```bash
npm start
```

## 📝 Commandes disponibles

- `!help` : Affiche la liste des commandes disponibles
- `!dice` : Lance un dé
[Ajoutez ici les autres commandes disponibles]

## 📜 Licence

MIT

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.
