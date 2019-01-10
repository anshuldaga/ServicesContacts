'use strict';

module.exports = function(app) {
    var product = require('../controllers/productController');
    app.route('/products')
        .get(product.products)
        .post(product.add);

};