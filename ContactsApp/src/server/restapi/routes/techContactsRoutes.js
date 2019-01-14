'use strict';

module.exports = function(app) {
    console.log("@@ inside Router export method");
    var techContacts = require('../controllers/techContactsController');

    app.route('/getTechList')
        .get(techContacts.getTechList);
    app.route('/getTechDetails/:techID')
        .get(techContacts.getTechDetails);

    /* app.route('/getTestList')
        .get(techContacts.getTestList);
    app.route('/prodList')
        .get(techContacts.getProdList); */
};