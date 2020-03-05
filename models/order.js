const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new Schema({
    products: [
        {
            product: {
                type: Object,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }

})

//     addOrder() {
//         const db = getDb();
//         return this.getCart()
//             .then(products => {
//                 const order = {
//                     items: products,
//                     user: {
//                         _id: this._id,
//                         name: this.name
//                     }
//                 }
//                 return db.collection('orders').insertOne(order);
//             }).then(result => {
//                 return db.collection('users').updateOne({ _id: new mongodb.ObjectId(this._id) }, { $set: { cart: { items: [] } } })
//             })
//     }
module.exports = mongoose.model('Order', orderSchema);