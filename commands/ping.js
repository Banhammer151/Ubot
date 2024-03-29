exports.run = async (client, message, args) => {
    var Discord = require('discord.js');
    const m = await message.channel.send('Gathering info about latency and API latency');
    let embed = new Discord.RichEmbed()
        .setThumbnail(client.user.avatarURL)
        .setColor("#00000")
        .addField("Latency (ms) is:", m.createdTimestamp - message.createdTimestamp)
        .addField("API latency (ms) is", client.ping)
    message.channel.send(embed)
}