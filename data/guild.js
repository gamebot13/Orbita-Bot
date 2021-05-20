const config = require('../config.json')
const schema = mongoose.Schema({
    guildID: String,
    prefix: { type: String, default: config.prefix },
    refix: { type: String, default: ">" },
});
module.exports = mongoose.model("Guild", schema)
