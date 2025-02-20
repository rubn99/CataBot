const fs = require('fs');

module.exports = {
	name: 'randomize',
	description: 'Posa un valor aleatori de monedes a tots els usuaris del servidor',
    usage: '[ max ]',
	type: 'mod',
	execute(message, args, servers, userData) {

        let max = 1000;
        if (args[0]) {
            if (!isNaN(args[0])) {
                max = Math.abs(args[0]);
            } else {
                message.reply("posa un numero!");
                return;
            }
        }

        message.guild.members.forEach(member => {
            if (userData[message.guild.id + member.user.id]) {
                if (userData[message.guild.id + member.user.id].money) {
                    if (member.user.bot)
                        userData[message.guild.id + member.user.id].money = -1;
                    else
                        userData[message.guild.id + member.user.id].money = Math.round(Math.random() * max);
                }
            }
        });
        
	    fs.writeFile('Storage/userData.json', JSON.stringify(userData, null, 2), (err) => {if(err) console.error(err);});
        message.channel.send('🔀 Monedes randomitzades correctament amb un valor maxim de '+ max +'! ✅');
	},
};