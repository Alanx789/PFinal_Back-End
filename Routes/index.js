const express = require('express')
const {LogIn, SignIn} = require('../Controllers')

const router = express.Router()

router.post('/log-in', LogIn)
router.get('/sign-in', SignIn)


module.exports = {
    router
}