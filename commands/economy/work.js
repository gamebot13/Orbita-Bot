const ms = require('ms');

module.exports = {
    name: 'work',
    description: 'робота',
    aliases: ["work"],
    public: true,
    async execute(bot, message, args, config) {

      let data = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
      
      if(data._time !== null && config.time - (Date.now() - data._time) > 0) return message.reply(`Вы уже взяли свой бонус. Приходите через ${ms(config.time - (Date.now() - data._time))}`)
      
      let a = new Discord.MessageEmbed()
      .setDescription(`Вы поработали. И вам было выдано \`${config.robota}\`копеек`)
      .setColor(config.color)
      message.channel.send(a);
      data._time = Date.now(); data.money += parseInt(config.robota); data.save() 
  }
}
