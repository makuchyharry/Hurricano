const Discord = require("discord.js");
const Command = require("@Command");

module.exports = class RipCommand extends Command {
  constructor(client) {
    super(client, {
      name: "rip",
      cooldown: 5,
      description: "Shows you someone's grave!",
    });
  }
  async run(message, args) {
    const canvacord = require("canvacord");
    let person =
      message.mentions.users.first() ||
      (await message.client.users.fetch(args[0]).catch((e) => {})) ||
      message.author;
    let avatar = person.displayAvatarURL({ dynamic: false, format: "png" });
    const img = await canvacord.Canvas.rip(avatar);
    const embed = new Discord.MessageEmbed()
      .setTitle("Rip!")
      .setDescription(`Rip ${person.toString()}!`)
      .attachFiles([new Discord.MessageAttachment(img, "img.png")])
      .setImage("attachment://img.png");
    message.reply(embed);
  }
};
