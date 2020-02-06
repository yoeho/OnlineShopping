const fs = require('fs');
const path = require('path');

const getProductFromFile = (cb) => {
    const p = path.join(path.dirname(process.mainModule.filename), 'data', 'product.json');
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        }
        cb(JSON.parse(fileContent));
    });
}

module.exports = class Product {
    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }
    save() {
        this.id = Math.random().toString();
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'product.json');
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            console.log(products);//before array
            products.push(this);
            console.log(products);//after array
            fs.writeFile(p, JSON.stringify(products), (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });
        // products.push(this);
    }
    static fetchAll(cb) {
        getProductFromFile(cb);
    }

    //id win lar
    //cb pyan pod
    static findById(id, dc) {
        getProductFromFile(products => {
            const product = products.find(p => p.id === id);
            dc(product);
        });
    }

}