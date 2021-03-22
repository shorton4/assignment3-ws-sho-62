var express = require('express')
var router = express.Router()

var controller = require('../controllers/contoller.js')

router.post('/add', controller.add)

module.exports = router;