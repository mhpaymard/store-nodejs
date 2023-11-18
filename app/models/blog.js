const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    author: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        default: []
    },
    category: {
        type: mongoose.Types.ObjectId,
        required: true
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
    }
})

const BlogModel = mongoose.model('blog', blogSchema);

module.exports = {
    BlogModel
}