'use strict';

module.exports = function(app) {
    console.log("@@ inside Router export method");
    var techContacts = require('../controllers/techContactsController');
    app.route('/testList')
        .get(techContacts.getTestList);
    app.route('/prodList')
        .get(techContacts.getProdList);
    app.route('/techinfo')
        .get(techContacts.getTechInfo);
};