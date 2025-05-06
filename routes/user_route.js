const express = require('express')
const router = express.Router()
const userController = require('../controllers/user_controllers')
const authController = require('../controllers/authentification_controller')

router.get('/', authController.verifyToken, userController.getUsers)
router.post('/', userController.createUser)
router.put('/:email', authController.verifyToken, userController.updateUser)
router.delete('/:email', authController.verifyToken, userController.deleteUser)


module.exports = router



