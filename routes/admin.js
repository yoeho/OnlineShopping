const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin');
//add product get
router.get('/add-product', adminController.getAddProduct);
//add product post
router.post('/add-product', adminController.postAddProduct);
//product list
router.get('/products', adminController.getProducts);

router.post('/delete-product', adminController.postDeleteProduct);

//edit form
router.get('/edit-product/:productId', adminController.getEditProduct);
router.post('/edit-product', adminController.postEditProduct);

module.exports = router;