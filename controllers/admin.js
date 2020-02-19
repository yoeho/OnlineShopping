const Product = require('../models/product');
exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product.ejs',
        {
            pageTitle: 'Add Product',
            path: '/admin/add-product'
        });
};

exports.postAddProduct = (req, res, next) => {
    // const title = req.body.title;
    // const product = new Product(title);
    const product = new Product(req.body.title, req.body.imageUrl, req.body.price, req.body.description);
    // products.push({ title: req.body.title });            //object
    product.save()
        .then(result => {
            console.log(result);
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
        });
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll().then(products => {
        res.render('admin/products.ejs', {
            pageTitle: 'Admin Products',
            path: '/admin/products',
            prods: products

        });
    }).catch(err => {
        console.log(err);
    })
}