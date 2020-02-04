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
    const product = new Product(req.body.title, req.body.imageUrl, req.body.price, req.body.description);            //object
    product.save();
    // products.push({ title: req.body.title });
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll((products) => {
        res.render('admin/products.ejs', {
            pageTitle: 'Admin Products',
            path: '/admin/products',
            prods: products

        }); //static 

    });
}