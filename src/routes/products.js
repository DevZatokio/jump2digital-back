const express = require('express');
const router = express.Router();

const controllers_products = require('../controllers/products')

router.get('/product/:_id', controllers_products.read);
router.post('/product', controllers_products.create);
router.delete('/product', controllers_products.delete);
router.put('/product', controllers_products.update);
router.get('/product', controllers_products.findAll);

module.exports = router;
