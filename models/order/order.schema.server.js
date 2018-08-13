const mongoose = require('mongoose');
module.exports = mongoose.Schema({
    orderId: Number,
    status: String,
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }],
    restaurant: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RestaurantModel'
    }],
    menuItem: String
}, {collection: orders});