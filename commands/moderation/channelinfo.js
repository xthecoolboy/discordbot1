const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

module.exports = {
  name: "channelinfo",
  category: "info",
  run: async (client, message, args) => {
    const channel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(`${args[0]}`) ||
      message.channel;
    let nsfw;
    if (channel.nsfw === true) {
      nsfw = `Yes`;
    } else {
      nsfw = `No`;
    }

    const category =
      message.guild.channels.cache.get(`${channel.parentID}`).name ||
      "No Category!";

    const EmbedText = new MessageEmbed()
      .setColor(`${Color}`)
      .setTitle(`Channel Information`)
      .addField(`Channel Name`, channel.name, true)
      .addField(`Channel Type`, `Text`, true)
      .addField(`Channel Nsfw`, nsfw, true)
      .addField(`Channel Category`, category, true)
      .addField(`Channel Position`, channel.position, true)
      .addField(`Channel Created At`, channel.createdAt.toDateString())
      .addField(`Channel Topic`, channel.topic || "No Topic!");

    const EmbedVoice = new MessageEmbed()
      .setColor(`${Color}`)
      .setTitle(`Channel Information`)
      .addField(`Channel Name`, channel.name, true)
      .addField(`Channel Type`, `Voice`, true)
      .addField(`Channel Category`, category, true)
      .addField(`Channel Position`, channel.position, true)
      .addField(`Channel Users Limit`, channel.userLimit, true)
      .addField(`Channel Bitrate`, channel.bitrate, true)
      .addField(`Channel Created At`, channel.createdAt.toDateString());

    let checkchannels;
    if (channel.type === "text") {
      checkchannels = EmbedText;
    } else {
      checkchannels = EmbedVoice;
    }

    message.channel.send(checkchannels);
  }
};
