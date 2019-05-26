const mongoose = require('mongoose')
const bcrypt = required('bcrypt')
const Schema = mongoose.Schema;
const SALT_I = 10
const jwt = require('jsonwebtoken')

require('dotenv').config()

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: 1
    }, 
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    lastname: {
        type: String,
        required: true,
        maxlength: 100
    },
    country: {
        type: String
    },
    datagame: [{
        game: {
            type: Schema.Types.ObjectId,
            ref: 'Game'
        },
        platform: {
            type: String
        },
        gamertag: {
            type: String,
            unique: 1
        },
    }],
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team'
    },
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
    plays: [{
        game: {
            type: Schema.Types.ObjectId,
            ref: 'Game',
        },
        video: {
            type: String
        }
    }],
    role: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
        default: []
    },
    token: {
        type: String
    }

})

userSchema.pre('save', async function (next){
    if (this.isModified('password')){
        try {
            const salt = await bcrypt.genSalt(SALT_I)
            const hash = await bcrypt.hash(this.password, salt)
            this.password = hash;
            next();
        } catch (err) {
            return next (err)
        }
    }
})

userSchema.methods.comparePassword = function(candidatePassword, cb){
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch){
        if (err) return cb(err)
        cb(null, isMatch)
    })
}

userSchema.methods.generateToken = async function(cb){
    const token = await jwt.sign(this._id.toHexString(),process.env.SECRET)

    this.token = token
    this.save((err, user) => {
        if(err) return cb(err)
        cb(null, user)
    })
}
userSchema.statics.findByToken = function(token,cb){
    var user = this

    jwt.verify(token, process.env.SECRET, function(err, decode){
        user.findOne({"_id": decode, "token": token}, function(err, user){
            if (err) cb(error)
            cb(null, user)
        })
    })
}

const User = mongoose.model('User', userSchema, "users")
module.exports = { User }