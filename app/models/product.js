const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    short_desc: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        default: []
    },
    tags: {
        type: [String],
        default: []
    },
    category: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    comment: {
        type: [],
        default: []
    },
    likes: {
        type: [mongoose.Types.ObjectId],
        default: []
    },
    dislikes: {
        type: [mongoose.Types.ObjectId],
        default: []
    },
    bookmark: {
        type: [mongoose.Types.ObjectId],
        default: []
    },
    price: {
        type: Number,
        default: 0
    },
    discount: {
        type: Number,
        default: 0
    },
    count: {
        type: Number,
        default: 0
    },
    type: {
        type: String,
        required: true
    },
    time: {
        type: String
    },
    format: {
        type: String
    },
    teacher: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    feature: {
        type: Object,
        default: {
            length: '',
            height: '',
            width: '',
            weight: '',
            colors: [],
            models: [],
            madein: ''
        }
    }
})

const ProductModel = mongoose.model('product', productSchema);

module.exports = {
    ProductModel
}