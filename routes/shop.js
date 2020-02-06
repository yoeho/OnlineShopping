const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
//product id route
router.get('/products/:productId', shopController.gerProduct);
router.get('/orders', shopController.getOrders);
router.get('/cart', shopController.getCart);
module.exports = router;