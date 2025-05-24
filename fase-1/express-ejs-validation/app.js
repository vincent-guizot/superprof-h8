const express = require('express')
const router = require('./routes')
const app = express()
const PORT = 3000

// set view engine
app.set('view engine', 'ejs')
// menggunakan middleware
// middleware: bodyParser-nya express
app.use(express.urlencoded({extended: false}))
// middleware : express.Router
app.use('/', router)

app.listen(PORT, () => {
    console.log("Gorengan 2 biji Rp.", PORT);
})