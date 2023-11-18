const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({

})

const PaymentModel = mongoose.model('payment', paymentSchema);

module.exports = {
    PaymentModel
}