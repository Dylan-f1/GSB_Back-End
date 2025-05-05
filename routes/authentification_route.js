const express = require('express')
const router = express.Router()
const { login, verifyToken, isAdmin } = require('../controllers/authentification_controller')

router.post('/login', login)
router.post('/verify-token', verifyToken)
router.post('/is-admin', isAdmin)

module.exports = router

