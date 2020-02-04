const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop/index.ejs', {
            pageTitle: 'Shop',
            path: '/',
            prods: products

        }); //static 

    });
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop/product-list.ejs', {
            pageTitle: 'All Products',
            path: '/products',
            prods: products

        }); //static 

    });
}
exports.getOrders = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop/orders.ejs', {
            pageTitle: 'Orders',
            path: '/orders',
            prods: products

        }); //static 

    });
}
exports.getCart = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('shop/cart.ejs', {
            pageTitle: 'Cart',
            path: '/cart',
            prods: products

        }); //static 

    });
}