module.exports = {
    name: "bash",
    description: "Команда позволяющая узнать описание других, не круто ли?",
    aliases: ["h"],
    public: true,
    async execute(bot, message, args, config) {
  if (message.author.id !== "807615996751118418") return message.channel.send('Вы не разработчик бота')
    try {
        let data = await Guild.findOne({ guildID: message.guild.id  })
        let out = require('child_process').execSync(args.join(' ').replace(`${data.refix}bash`, "")).toString('utf8')
        message.channel.send(out || 'Ошибка', { split: "\n", code: 'bash' })
    } catch (err) {
         message.channel.send(err, { split: "\n", code: 'bash' })
    }
}
    }