const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()
const routerComp = require('./companies')
const routerGG = require('./girlgroups')

// route
// app.METHOD(PATH/ENDPOINT, HANDLER/FUNCTION)
// ? Static route
router.get('/', Controller.home)

router.use('/companies', routerComp)
router.use('/girlgroups', routerGG)

module.exports = router