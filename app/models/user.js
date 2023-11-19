const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    username: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    phone: {
        type: String
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    password: {
        type: String,
        required:true
    },
    otp: {
        type: Object,
        default: {
            code: 0,
            expires: 0
        }
    },
    bills: {
        type: [],
        default: []
    },
    discount: {
        type: Number,
        default: 0
    },
    birthday: {
        type: String
    },
    roles: {
        type: [String],
        default: ['USER']
    }
})

const UserModel = mongoose.model('user', userSchema);

module.exports = {
    UserModel
}