const express = require('express')
const router = express.Router()
const billController = require('../controllers/bill_controllers')
const {verifyToken} = require('../controllers/authentification_controller')
const upload = require('../middlewares/upload')

router.get('/', verifyToken, billController.getBills)
router.post('/', verifyToken, upload.single('proof'), billController.createBill)
router.get('/:id', verifyToken, billController.getBillById)
router.put('/:id', verifyToken, billController.updateBill)
router.delete('/:id', verifyToken, billController.deleteBill)

module.exports = router

