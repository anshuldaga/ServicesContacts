var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  TechContacts = require('./restapi/models/techContactsModel'),
  bodyParser = require('body-parser');

//var  mongodburi = "mongodb+srv://ashishdaga:aaailu@cluster0-qabk1.mongodb.net/onlinestore";
var  mongodburi = "mongodb+srv://ashishdaga:aaailu@cluster0-qabk1.mongodb.net/servicesContacts";
mongoose.Promise = global.Promise;
mongoose.connect(mongodburi);

var db = mongoose.connection;
//var db = mongoose.connect(mongodburi);
console.log("@@@ DB related info");
//console.log(db.tprofile.find());


/* console.log(db.getName());
console.log(db.version());
 */



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./restapi/routes/techContactsRoutes');
routes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found - check the URL??'})
  });
  
  app.listen(port);
  
  console.log('Tech Contact app -  RESTful web services with Nodejs started on: ' + port);
