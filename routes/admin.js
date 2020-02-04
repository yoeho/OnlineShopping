const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');
//add product get
router.get('/add-product', adminController.getAddProduct);
//add product post
router.post('/add-product', adminController.postAddProduct);
//product list
router.get('/products', adminController.getProducts);

module.exports = router;