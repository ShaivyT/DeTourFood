const mongoose = require('mongoose');
module.exports = mongoose.Schema({
   restaurantId: Number,
   name: String,
   phoneNumber: Number,
   cuisineType: String,
   menuList: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'MenuModel'
   }],
   user: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'UserModel'
   }],
   order: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'OrderModel'
   }],
   delivery: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'DeliveryModel'
   }]
}, {collection: restaurants});