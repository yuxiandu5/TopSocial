const express = require('express')
const {getProfile} = require('../controllers/profileController')

const profileRouter = express()

profileRouter.get('/', getProfile)

module.exports = profileRouter