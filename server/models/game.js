mongoose = require('mongoose')

const gameSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    images: {
        type: Array,
        default: []
    }
})

const Game = mongoose.model('Game', gameSchema, "games")

module.exports = { Game }