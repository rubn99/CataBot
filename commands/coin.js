const Discord = require("discord.js");

module.exports = {
	name: 'coin',
	description: 'Te la jugues al 50%',
	type: 'entreteniment',
    aliases: ['cflip'],
	execute(message) {

        let coin = Math.round(Math.random()); // We round between 0-1 so we have randomly true or false
        coin = coin === 1;
        let img = "";
        let result = "";

        if (coin) {
            img = 'Cara_';
            result = 'Cara';
        } else {
            img = 'Creu';
            result = img;
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
        .setTitle("**COIN FLIP**")
        .setAuthor('CataBOT', 'https://i.imgur.com/UXoPSuU.jpg', 'https://github.com/CatalaHD/DiscordBot')
        .setThumbnail('http://bit.ly/CataBot_Icon')
        .addField('Resultat', result, true)
        .setImage('http://bit.ly/CataBot_' + img)
        .setTimestamp().setFooter("Catabot 2020 © All rights reserved");

        message.channel.send(msg);
	},
};