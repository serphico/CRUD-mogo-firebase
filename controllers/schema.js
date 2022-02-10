import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const productSchemaName = 'products';

const productSchema = new Schema({
    title: {type: String, required: true, max: 100},
    price: {type: Number, required: true, max: 10000},
    thumbnail: {type: String, required: true, max:100}
});




const cartSchemaName = 'cart';

const cartSchema = new Schema({
    timeStamp:{type: String, required: true},
    productos:[{
        _id: {type: String, required:true},
        title: {type: String, required: true, max: 100},
        price: {type: Number, required: true, max: 10000},
        thumbnail: {type: String, required: true, max:100}
    },]
})

export const productos = mongoose.model(productSchemaName,productSchema);
export const carrito = mongoose.model(cartSchemaName,cartSchema)

