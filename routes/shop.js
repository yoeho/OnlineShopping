const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
//product id route
router.get('/products/:productId', shopController.getProduct);
router.get('/cart', shopController.getCart);
router.post('/cart', shopController.postCart);
router.post('/delete-cart-item', shopController.postDeleteCart);
router.get('/orders', shopController.getOrders);
router.post('/orders', shopController.postOrders);
module.exports = router;