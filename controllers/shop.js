const Product = require('../models/product');

exports.getIndex = (req, res, next) => {
    Product.fetchAll().then(products => {
        res.render('shop/index.ejs', {
            pageTitle: 'Shop',
            path: '/',
            prods: products

        });
    }).catch(err => {
        console.log(err);
    })
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll().then(products => {
        res.render('shop/product-list.ejs', {
            pageTitle: 'All Products',
            path: '/products',
            prods: products

        });
    }).catch(err => {
        console.log(err);
    })
}
exports.getProduct = (req, res, next) => {
    //url parameter ko lann u
    //routes ka lann u tr productId ko
    const prodId = req.params.productId;
    console.log(typeof (prodId));
    Product.findById(prodId).then(product => {
        res.render('shop/product-detail.ejs', {
            pageTitle: 'Product Details',
            path: '/products',
            product: product
        });
    }).catch(wrr => {
        console.log(err);
    })
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