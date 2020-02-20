const mongodb = require('mongodb');
const Product = require('../models/product');
exports.getAddProduct = (req, res, next) => {
    res.render('admin/product-form.ejs',
        {
            pageTitle: 'Add Product',
            path: '/admin/add-product',
            editing: false
        });
};

exports.postAddProduct = (req, res, next) => {
    // const title = req.body.title;
    // const product = new Product(title);
    const product = new Product(req.body.title, req.body.imageUrl, req.body.price, req.body.description, null);
    // products.push({ title: req.body.title });            //object
    product.save()
        .then(result => {
            console.log(result);
            res.redirect('/admin/products');
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
exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.deleteById(prodId)
        .then(() => {
            console.log('Successful deleted product');
            res.redirect('/admin/products');
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getEditProduct = (req, res, next) => {
    const prodId = req.params.productId;
    // console.log(prodId);
    const editMode = req.query.edit;
    // console.log(editMode);
    Product.findById(prodId)
        .then(product => {
            res.render('admin/product-form.ejs', {
                pageTitle: 'Edit Title',
                path: '/admin/edit-product',
                product: product,
                editing: editMode
            });
        }).catch(err => {
            console.log(err);
        })
}

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    console.log(prodId);
    const updatedTitle = req.body.title;
    const updatedImageUrl = req.body.imageUrl;
    const updatedPrice = req.body.price;
    const updatedDescription = req.body.description;

    const product = new Product(updatedTitle, updatedImageUrl, updatedPrice, updatedDescription, new mongodb.ObjectId(prodId));
    product.save()
        .then(() => {
            console.log('Your updated is successfull');
            res.redirect('/admin/products');
        })
        .catch(err => {
            console.log(err);
        })

}