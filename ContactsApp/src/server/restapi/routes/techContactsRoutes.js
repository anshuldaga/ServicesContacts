'use strict';

module.exports = function(app) {
    console.log("@@ inside Router export method");
    var techContacts = require('../controllers/techContactsController');
    app.route('/techContacts')
        .get(techContacts.techContactsList)
        .post(techContacts.addTech);
};