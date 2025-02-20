const Discord = require("discord.js");

module.exports = {
    name: 'rps',
    description: 'Juga a pedra-paper-tissora amb el bot',
    type: 'entreteniment',
    usage: '< rock/paper/scissors >',
    execute(message, args, servers) {

        let server = servers[message.guild.id];

        let player = "rock";
        if (!args[0]) {
            message.reply("no se què jugar!");
            return message.channel.send(server.prefix + "help rps");
        } else {
            player = args[0].toLowerCase();
            if (player != 'rock' && player != 'paper' && player != 'scissors') {
                message.reply("has posat una opció que no es vàlida!");
                return message.channel.send(server.prefix + "help rps");
            }
        }

        const logic = { // Reference: https://rosettacode.org/wiki/Rock-paper-scissors#JavaScript
            rock: { w: 'scissors', l: 'paper' },
            paper: { w: 'rock', l: 'scissors' },
            scissors: { w: 'paper', l: 'rock' }
        };

        let choices = Object.keys(logic);
        let IA = choices[Math.floor(Math.random()*choices.length)];
        let guanyador = "";

        if (player === IA) {
            // si hi ha empat
            guanyador = "Empat";
        } else {
            // Si no hi ha empat, comprova el guanyador
            // Retorna true si guanya el player
            guanyador = logic[player].w === IA;
            if (guanyador) {
                guanyador = "Player";
            } else {
                guanyador = "IA";
            }
        }
            
            function getRandomColor() {
            let letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        let msg = new Discord.RichEmbed()
        .setColor(getRandomColor())
        .setTitle("**ROCK PAPER SCISSORS**")
        .setAuthor('CataBOT', 'https://i.imgur.com/UXoPSuU.jpg', 'https://github.com/CatalaHD/DiscordBot')
        .setThumbnail('http://bit.ly/CataBot_Icon')
        .addField('Player', player, true)
        .addField('IA', IA, true)
        .addField('Resultat', guanyador)
        .setTimestamp().setFooter("Catabot 2020 © All rights reserved");

        message.channel.send(msg);
    },
};