const express = require('express')
const router = express.Router()
const billController = require('../controllers/bill_controllers')
const authController = require('../controllers/authentification_controller')

router.get('/', authController.verifyToken, billController.getBills)
router.post('/', authController.verifyToken, billController.createBill)
router.get('/:id', authController.verifyToken, billController.getBillById)
router.put('/:id', authController.verifyToken, billController.updateBill)
router.delete('/:id', authController.verifyToken, billController.deleteBill)

module.exports = router

