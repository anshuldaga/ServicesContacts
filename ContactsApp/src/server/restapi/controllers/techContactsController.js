'use strict';

var mongoose = require('mongoose'),
TestList = mongoose.model('test');

var mongoose = require('mongoose'),
ProductList = mongoose.model('products');

var mongoose = require('mongoose'),
TechInfo = mongoose.model('techinfoCHECK');


exports.getTestList = function(req, res) {
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
};

exports.getTechInfo = function(req, res) {
  console.log("@@@ 111 inside getTechList methods");
  TechInfo.find({}, function(err, techList) {
    if (err)
      res.send(err);

      console.log("@@@222 - inside methods to get list of techs");
      console.log(techList);
    res.json(techList);
  });
};


console.log("@@@ inside Controller");
//console.log(TechContacts.count());
/* console.log(TechContacts.length);
console.log(TechContacts.name);
console.log(TechContacts.modelName);
console.log(TechContacts.prototype);
console.log(TechContacts.schema);
console.log(TechContacts.toString()); */