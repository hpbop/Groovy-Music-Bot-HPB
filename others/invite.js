const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add us to your server!")
      .setDescription("Love using HPB's bot? Great, Thank you! Consider adding it to your serverso we can get verify soon")
      .setColor("#F0EAD6")
      .setAuthor('HPB','https://cdn.discordapp.com/attachments/778600026280558617/781024479623118878/ezgif.com-gif-maker_1.gif')
      .setThumbnail(message.guild.iconURL())
      .addField(`Use the following link to add Harmony to your discord server`, 'https://discord.com/api/oauth2/authorize?client_id=909316390417203220&permissions=137476037440&scope=bot', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};
