const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    username: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
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