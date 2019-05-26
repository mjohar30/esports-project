express = require('express')
mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3002

const { User } = require('./models/user')
const { Team } = require('./models/team')
const { Game } = require('./models/game')
const { auth } = require('./middlewares/auth')
const { admin } = require('./middlewares/admin')

app.use(cookieParser())
app.use(express.urlencoded({extender: true}))
app.use(express.json())

require('dotenv').config()

//**USERS
//Registro
app.post('/users/register', (req, res) => {
    const user = new User(req.body)
    user.save((err) => {
        if(err) return res.json({success: false, err})
        res.status(200).json({
            success: true
        })
    })
})
//Traer todos los usuarios
app.get('/users', (req,res) =>{
    User
    .find({})
    .populate("datagame.game", "name")
    .populate("plays.game", "name")
    .populate('team', 'name')
    .exec((err, docs)=> {
        if(err) return res.json({success: false, err})
        res.status(200).send(docs)
    })
})
//Editar
app.post('/users/edit', (req,res) => {

})
//Buscar por id
app.get('/users/users_by_id', ( req, res ) => {
    let type = req.query.type
    let users = req.query.id
    
    if(type === "array"){
        let ids = users.split(',')
        users = []
        users = ids.map(user => { 
            // Convertirlos en ObjectId de Mongoose
            return mongoose.Types.ObjectId(user)
        })
    }
    User
    .find({ '_id': {$in:users}})
    .populate("datagame.game", "name")
    .populate("plays.game", "name")
    .populate('team', 'name')
    .exec((err, docs)=> {
        if(err) return res.json({success: false, err})
        res.status(200).send(docs)
    })
})
//Login
app.post('/users/login', (req, res) => {
    User.findOne({'email': req.body.email}, (err,user) => {
        if(err) return res.send(err)
        if(!user) return res.json({loginSuccess: false, message: 'Auth fallida, email no encontrado'})
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch) return res.json({loginSuccess: false, message: "Wrong Password"})
            user.generateToken((err, user)=> {
                if(err) return res.status(400).send(err)
                res.cookie('esports_auth', user.token).status(200).json(
                    {loginSuccess: true}
                    )
                })
            })
        })
    })
//Auth
app.get('/users/auth', auth, (req, res) => {
    res.status(200).json({
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
    })
})
//Logout
app.get('/users/logout', auth, (req, res) => {
    User.findOneAndUpdate(
        {_id: req.user._id},
        {token: ''},
        (err, doc) => {
            if(err) return res.json({success: false, err})
            return res.status(200).json({
                success: true
            })
        }
    )
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