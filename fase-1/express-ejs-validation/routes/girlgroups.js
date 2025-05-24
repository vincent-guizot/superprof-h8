const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()

// ! Request Query
// menumpang di route yang sudah ada
// biasanya digunakan untuk search/sort
// di url dia akan menggunakan symbol ?key=value
router.get('/', Controller.girlgroups)

// add & edit butuh 2 routes
// 1. get => render form
router.get('/add', Controller.getAdd)
// 2. post => insertion / menyimpan data
router.post('/add', Controller.postAdd)

// ? Dinamic route
// ! request params
// harus didaftarkan di pathnya route
// menggunakan symbol :namaParams
router.get('/:id', Controller.girlgroupById)
router.get('/:id/edit', Controller.getEdit)
router.post('/:id/edit', Controller.postEdit)
router.get('/:id/delete', Controller.getDelete)

module.exports = router