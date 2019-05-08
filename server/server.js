express = require('express')
mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3002

const { User } = require('./models/user')
const { Team } = require('./models/team')
const { Game } = require('./models/game')

app.use(express.urlencoded({extender: true}))
app.use(express.json())

require('dotenv').config()

app.post('/users/register', (req,res) => {
    const user = new User(req.body)
    user.save((err) => {
        if (err) return res.json({success: false, err})
        res.status(200).json({
            success: true
        })
    })
})

app.post('/teams/register', (req,res) => {
    const team = new Team(req.body)
    team.save((err) => {
        if (err) return res.json({success: false, err})
        res.status(200).json({
            success: true
        })
    })
})

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true}, (err) => {
    if (err) return err
    console.log("Conectado a MongoDB")
})

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})