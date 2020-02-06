const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
    Product.fetchAll((cb) => {
        res.render('shop/index.ejs', {
            pageTitle: 'Shop',
            path: '/',
            prods: cb

        }); //static 

    });
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((cb) => {
        res.render('shop/product-list.ejs', {
            pageTitle: 'All Products',
            path: '/products',
            prods: cb

        }); //static 

    });
}
exports.gerProduct = (req, res, next) => {
    //url parameter ko lann u
    //routes ka lann u tr productId ko
    const prodId = req.params.productId;
    console.log(prodId);
    Product.findById(prodId, dc => {
        res.render('shop/product-detail.ejs', {
            pageTitle: 'Product Details',
            path: '/products',
            product: dc
        });
    });
}
exports.getOrders = (req, res, next) => {
    Product.fetchAll((cb) => {
        res.render('shop/orders.ejs', {
            pageTitle: 'Orders',
            path: '/orders',
            prods: cb

        }); //static 

    });
}
exports.getCart = (req, res, next) => {
    Product.fetchAll((cb) => {
        res.render('shop/cart.ejs', {
            pageTitle: 'Cart',
            path: '/cart',
            prods: cb

        }); //static 

    });
}