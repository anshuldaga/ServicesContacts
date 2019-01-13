'use strict';

var mongoose = require('mongoose'),
TechList = mongoose.model('techlist');

var mongoose = require('mongoose'),
TechDetails = mongoose.model('techDetails');

/* var mongoose = require('mongoose'),
TestList = mongoose.model('test');

var mongoose = require('mongoose'),
ProductList = mongoose.model('products'); */


exports.getTechList = function(req, res) {
  console.log("@@@ 111 inside getTechList methods");
  TechList.find({}, function(err, techList) {
    if (err)
      res.send(err);

      console.log("@@@222 - inside methods to get list of techs");
      console.log(techList);
    res.json(techList);
  });
};


exports.getTechDetails = function(req, res) {
  
  var techID = req.params.techID;
//  var techID2 = req.query.userID; --- not working 
  console.log("@@@ 111 inside getTechDetails methods. techID:"+ techID );
  TechDetails.findById(mongoose.Types.ObjectId(techID), function(err, techDetails) {
    if (err)
      res.send(err);

      console.log("@@@222 - inside methods to get list of techs");
      console.log(techDetails);
    res.json(techDetails);
  });
};


/* exports.getTestList = function(req, res) {
  console.log("@@@ 111 inside methods to get list of techs");
  TestList.find({}, function(err, testList) {
    if (err)
      res.send(err);

      console.log("@@@222 - inside methods to get list of techs");
      console.log(testList);
    res.json(testList);
  });
};

exports.getProdList = function(req, res) {
  console.log("@@@ 111 inside getTechList methods");
  ProductList.find({}, function(err, techList) {
    if (err)
      res.send(err);

      console.log("@@@222 - inside methods to get list of techs");
      console.log(techList);
    res.json(techList);
  });
}; */

console.log("@@@ inside Controller");
//console.log(TechContacts.count());
/* console.log(TechContacts.length);
console.log(TechContacts.name);
console.log(TechContacts.modelName);
console.log(TechContacts.prototype);
console.log(TechContacts.schema);
console.log(TechContacts.toString()); */