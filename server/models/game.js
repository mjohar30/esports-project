mongoose = require('mongoose')
Schema = mongoose.Schema

const gameSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    platform: {
        type: Schema.Types.ObjectId,
        ref: 'Platform'
    },
    images: {
        type: Array,
        default: []
    }
})

const Game = mongoose.model('Game', gameSchema, "games")

module.exports = { Game }