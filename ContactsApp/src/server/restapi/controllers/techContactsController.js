'use strict';

var mongoose = require('mongoose'),
TechContacts = mongoose.model('products');
//products techContacts

console.log("@@@ inside Controller");
//console.log(TechContacts.count());
console.log(TechContacts.length);
console.log(TechContacts.name);
console.log(TechContacts.modelName);
console.log(TechContacts.prototype);
console.log(TechContacts.schema);
console.log(TechContacts.toString());

exports.techContactsList = function(req, res) {
  console.log("@@@ 111 inside methods to get list of techs");
  TechContacts.find({}, function(err, techList) {
    if (err)
      res.send(err);

      console.log("@@@222 - inside methods to get list of techs");
      console.log(techList);
    res.json(techList);
  });
};

exports.addTech = function(req, res) {
  var new_tech = new TechContacts(req.body);
  new_tech.save(function(err, techProfile) {
    if (err)
      res.send(err);
    res.json(techProfile);
  });
};
