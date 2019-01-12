var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Product = require('./restapi/models/productModel'),
  bodyParser = require('body-parser');

var  mongodburi = "mongodb+srv://ashishdaga:aaailu@cluster0-qabk1.mongodb.net/onlinestore";
mongoose.Promise = global.Promise;
mongoose.connect(mongodburi);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./restapi/routes/productRoutes');
routes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });
  
  app.listen(port);
  
  console.log('Online Store -  RESTful web services with Nodejs started on: ' + port);
