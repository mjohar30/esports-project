express = require('express')
mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3002
require('dotenv').config()

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true}, (err) => {
    if (err) return err
    console.log("Conectado a MongoDB")
})

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`)
})