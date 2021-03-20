const Discord = require("discord.js");

module.exports = {
  name: "beautify",
  cooldown: 5,
  description: "Make you more beautiful :D",
  run: async (message, args) => {
    const canvacord = require("canvacord");
    let person =
      message.mentions.users.first() ||
      (await message.client.users.fetch(args[0]).catch((e) => {})) ||
      message.author;
    let avatar = person.displayAvatarURL({ dynamic: false, format: "png" });
    const img = await canvacord.Canvas.beautiful(avatar);
    const embed = new Discord.MessageEmbed()
      .setTitle("What an art work.")
      .setDescription(`How amazing this art is.`)
      .attachFiles([new Discord.MessageAttachment(img, "img.png")])
      .setImage("attachment://img.png");
    message.reply(embed);
  },
};