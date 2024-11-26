const express = require('express')
const {getHighline} = require('../controllers/highlineController')

const highlineRouter = express()

highlineRouter.get('/', getHighline)
module.exports = highlineRouter