const express = require('express')
const {getRequest} = require('../controllers/requestController')

const requestRouter = express()

requestRouter.get('/', getRequest)



module.exports = requestRouter