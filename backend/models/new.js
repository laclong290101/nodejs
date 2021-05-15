import mongoose from 'mongoose';

const newSchame = mongoose.Schema({
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
    photo: {
        data: Buffer,
        contentType: String
    }
}, { timestamps: true });
module.exports = mongoose.model("New", newSchame)