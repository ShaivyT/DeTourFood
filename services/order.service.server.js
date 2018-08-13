module.exports = app => {

    app.post('api/order', createOrder);
    app.get('api/order', findAllOrders);
    app.get('api/order/:orderId', findOrderById);
    app.put('api/order/:orderId', updateOrder);
    app.delete('api/order/:orderId', deleteOrder);

    const orderModel = require('../models/order/order.model.server');

    createOrder = (request, response) => {
        orderModel.createOrder(request.body)
            .then(order => response.send(order));
    }

    findAllOrders = (request, response) => {
        orderModel.findAllOrders(request.body)
            .then(orders => response.send(orders));
    }

    findOrderById = (request, response) => {
        orderModel.findOrderById(request.params.orderId)
            .then(order => response.send(order));
    }

    updateOrder = (request, response) => {
        orderModel.updateOrder(request.params.orderId, request.body)
            .then(status => response.send(status));
    }

    deleteOrder = (request, response) => {
        orderModel.deleteOrder(request.params.orderId)
            .then(status => response.send(status));
    }
}