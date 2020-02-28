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
exports.getCart = (req, res, next) => {
    req.user.getCart()
        .then(products => {
            console.log(products);
            res.render('shop/cart.ejs', {
                pageTitle: 'Cart',
                path: '/cart',
                prods: products
            });
        })
        .catch(err => {
            console.log(err);
        })
}
exports.postCart = (req, res, next) => {
    const productId = req.body.productId;
    // console.log(productId);
    Product.findById(productId)
        .then(product => {
            return req.user.addToCart(product);
        })
        .then(result => {
            console.log(result);
            res.redirect('/');

        })
}
exports.postDeleteCart = (req, res, next) => {
    const prodId = req.body.productId;
    console.log(prodId);
    req.user.deleteCartItem(prodId);
    res.redirect('/cart');
}
// exports.getOrders = (req, res, next) => {
//     res.render('shop/orders.ejs', {
//         pageTitle: 'Orders',
//         path: '/orders'

//     }); //static 
// }
exports.postOrders = (req, res, next) => {
    req.user.addOrder()
        .then(orders => {
            console.log(orders);
            res.redirect('/cart');
        })
        .catch(err => {
            console.log(err);
        })
}