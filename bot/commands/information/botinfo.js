const Discord = require("discord.js");
const emojis = require("../../utilities/emojis.json");
const Command = require("@Command");
module.exports = class BotInfoCommand extends Command {
  constructor(client) {
    super(client, {
      name: "botinfo",
      description: "About the bot!",
      aliases: ["info", "bi"],
      userPermissions: ["SEND_MESSAGES"],
    });
  }
  async run(message, args) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(
        "Hurricano™ Botinfo",
        "https://raw.githubusercontent.com/HurricanoBot/HurricanoImages/master/SetAuthorEmojis/Bot.png"
      )
      .setColor("#034ea2")
      .setImage(
        "https://raw.githubusercontent.com/HurricanoBot/HurricanoImages/master/other/Botinfo.png"
      )
      .addField(
        "Description",
        "Hurricano™ was created in January of 2021. It's theme colour is blue. It's also open source! You can check out its repository by clicking [here](https://github.com/HurricanoBot/Hurricano). It's owners own a server called Dragon World too."
      )
      .addField(
        "Extra Information",
        `${emojis.signs.ping} Ping: \`${message.client.ws.ping}\`ms\n${emojis.categories.owner} Owners: \`Dragonizedpizza\`, \`Militia21\`, \`Anogh297\`. \n${emojis.signs.servers} Servers: \`${message.client.guilds.cache.size} Servers.\`\n${emojis.signs.users} Users: \`${message.client.users.cache.size} Users.\``
      );
    message.reply(embed);
  }
};
