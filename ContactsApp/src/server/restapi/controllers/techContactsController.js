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

exports.addTech = function(req, res) {
  console.log("@@ inside add function");
  var new_tech = new TechRecords(req.body);
  console.log("new tech info"+new_tech);
  new_tech.save(function(err, newTech) {
    if (err)
      res.send(err);

    res.json(newTech);
  });
};


exports.searchTechBySkills = function(req, res) {
  
  var skillSet = req.params.skillSet;
  console.log("@@ selected skill set:"+skillSet)

  if(skillSet === "All")
  {

    TechRecords.find({}, function(err, techListAll) {
      if (err)
        res.send(err);
  
      res.json(techListAll);
    });
  }
  else{
    //TechRecords.find({skills: /Plumbing/i}, function(err, techlistAsperSkills) {
    TechRecords.find({skills:{'$regex' : skillSet, '$options' : 'i'}}, function(err, techlistAsperSkills) {
      if (err)
        res.send(err);

      res.json(techlistAsperSkills);
    });
  
  }
};


console.log("@@@ inside Controller");
//console.log(TechContacts.count());
/* console.log(TechContacts.length);
console.log(TechContacts.name);
console.log(TechContacts.modelName);
console.log(TechContacts.prototype);
console.log(TechContacts.schema);
console.log(TechContacts.toString()); */