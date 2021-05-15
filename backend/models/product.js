import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema;
const productSchame = mongoose.Schema({
    name: {
        type: String,
        strim: true,
        maxLength: 32,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 2000
    },
    price: {
        type: Number
    },
    categoryId: {
        type: ObjectId,
        ref: 'Category',
        require: true
    },
    photo: {
        // data: Buffer,
        // contentType: String
        type: String
    },
    shipping: {
        required: true,
        type: Boolean
    },
    sold: {
        type: Number,
        default: 0
    },
    status: {
        type: Boolean
    },
    countInstock: {
        type: Number
    },
    Material: {
        type: String
    }

}, { timestamps: true });
module.exports = mongoose.model("Product", productSchame)