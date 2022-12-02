const customerController = require('../controllers/customerController')
const router = require('express').Router()


router.get('/', customerController.readCustomer);
router.get('/:id', customerController.readOneCustomer);
router.put('/:id', customerController.editCustomerData);

module.exports = router;