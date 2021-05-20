module.exports = {
    name: "eval",
    description: "Команда позволяющая узнать описание других, не круто ли?",
    aliases: ["h"],
    public: true,
    async execute(bot, message, args, config) {
  var e
  try { with ( Math ) e = eval ( args[0] )}
  catch { e = "Error" }
  message.channel.send ( "> " + e )
}}