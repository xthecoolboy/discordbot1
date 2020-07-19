const { MessageEmbed } = require("discord.js");
const snekfetch = require("snekfetch");
const Color = `RANDOM`;

module.exports = {
  name: "advice",
  category: "fun",
  run: async (client, message, args) => {
    const { body } = await snekfetch.get("http://api.adviceslip.com/advice");
    const adviceembed = new MessageEmbed()
      .setColor(`${Color}`)
      .setTitle(`Advice!`)
      .setDescription(JSON.parse(body.toString()).slip.advice)
      .setTimestamp();
    message.channel.send(adviceembed);
  }
};
