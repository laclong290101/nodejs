import mongoose from 'mongoose';

const categorySchame = mongoose.Schema({
    name: {
        type: String,
        strim: true,
        maxLength: 32,
        required: true
    },
}, { timestamps: true });
module.exports = mongoose.model("Category", categorySchame)