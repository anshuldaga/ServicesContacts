'use strict';

module.exports = function(app) {
    console.log("@@ inside Router export method");
    var techContacts = require('../controllers/techContactsController');


//This is to bypass CORS and allow browser to access diff domain. Change it as per u deploy code on prod server.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', function(req, res, next) {
  // Handle the get for this route
  console.log("XXX in CORS get method ");
});
app.post('/', function(req, res, next) {
 // Handle the post for this route
 console.log("YYY in CORS post method ");
});



    app.route('/getTechList')
        .get(techContacts.getTechList);
    app.route('/getTechDetails/:techID')
        .get(techContacts.getTechDetails);
    app.route('/addTech')
        .post(techContacts.addTech);
       app.route('/searchTechBySkills')
        .get(techContacts.searchTechBySkills);
    
        
        

    /* app.route('/getTestList')
        .get(techContacts.getTestList);
    app.route('/prodList')
        .get(techContacts.getProdList); */
};