const express = require('express')
const router = express.Router()
const userController = require('../controllers/user_controllers')

router.get('/', userController.getUsers)
router.post('/', userController.createUser)
router.put('/:email', userController.updateUser)
router.delete('/:email', userController.deleteUser)
router.get('/:email', userController.getUserByEmail)

module.exports = router



