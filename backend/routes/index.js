const express = require('express')
const highlineRouter = require('./highline')
const messageRouter = require('./message')
const cardsRouter = require('./cards')
const requestRouter = require('./request')
const profileRouter = require('./profile')

const router = express.Router()

router.use('/highline', highlineRouter)
router.use('/message', messageRouter)
router.use('/cards', cardsRouter)
router.use('/request', requestRouter)
router.use('/profile', profileRouter)


module.exports = router