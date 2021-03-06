const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const teamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    country: {
        type: String,
    },
    datagame: [{
        game: {
            type: Schema.Types.ObjectId,
            ref: 'Game'
        },
        platform: {
            type: String
        }
    }],
    description: {
        type: String,
        maxlength: 400
    },
    socialnetwork: {
        twitch: {
            type: String
        },
        mixer: {
            type: String
        },
        youtube: {
            type: String
        },
        twitter: {
            type: String
        },
        instagram: {
            type: String
        },
        facebook: {
            type: String
        },
    },
    players: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        unique: 1
    }],
    plays: [{
        game: {
            type: Schema.Types.ObjectId,
            ref: 'Game'
        },
        video: {
            type: String
        }
    }],
    experience: [{
        title: {
            type: String
        },
        date: {
            type: Date
        },
        description: {
            type: String,
            maxlength: 400
        }
    }],
    images: {
        type: Array,
        default: []
    }
})

const Team = mongoose.model('Team', teamSchema, "teams")

module.exports = { Team }