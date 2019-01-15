'use strict';

var mongoose = require('mongoose'),
TechRecords = mongoose.model('techRecords');

exports.getTechList = function(req, res) {
  TechRecords.find({}, function(err, techList) {
    if (err)
      res.send(err);

    res.json(techList);
  });
};


exports.getTechDetails = function(req, res) {
  
  var techID = req.params.techID;
  
  TechRecords.findById(mongoose.Types.ObjectId(techID), function(err, techDetails) {
    if (err)
      res.send(err);

    res.json(techDetails);
  });
};

exports.add = function(req, res) {
  var new_product = new TechRecords (req.body);
  new_product.save(function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
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