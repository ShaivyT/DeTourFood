const mongoose = require('mongoose');
var orderSchema = require('./order.schema.server');
var orderModel = mongoose.model('OrderModel',orderSchema);

createOrder = order =>
    orderModel.create(order);

findAllOrders = () =>
    orderModel.find();

findOrderById = orderId =>
    orderModel.findById(orderId);

updateOrder = (orderId, newOrder) =>
    orderModel.update({_id: orderId}, {
        $set: newOrder
    });

deleteOrder = (orderId) =>
    orderModel.remove({_id: orderId});

module.exports = {
    createOrder, findAllOrders, findOrderById,
    updateOrder, deleteOrder
};