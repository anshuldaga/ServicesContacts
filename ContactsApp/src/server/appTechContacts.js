var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  //Product = require('./restapi/models/productModel'),
  TechContacts = require('./restapi/models/techContactsModel'),
  bodyParser = require('body-parser');

//var  mongodburi = "mongodb+srv://ashishdaga:aaailu@cluster0-qabk1.mongodb.net/onlinestore";
var  mongodburi = "mongodb+srv://ashishdaga:aaailu@cluster0-qabk1.mongodb.net/onlinestore";
mongoose.Promise = global.Promise;
mongoose.connect(mongodburi);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//var routes = require('./restapi/routes/productRoutes');
var routes = require('./restapi/routes/techContactsRoutes');
routes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found - why??'})
  });
  
  app.listen(port);
  
  console.log('Tech Contact app -  RESTful web services with Nodejs started on: ' + port);
