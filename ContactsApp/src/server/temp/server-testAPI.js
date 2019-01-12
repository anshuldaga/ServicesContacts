var express = require('express'),
mongoose = require('mongoose');
var app = express();
var fs = require("fs");
var lodash= require('lodash');


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})


app.get('/listUsers', function (req, res) {
    console.log("inside listUsers method")
   fs.readFile( '../assets/dataFiles' + "/" + "userData.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

//const MongoClient = require('mongodb').MongoClient;

//const uri = "mongodb+srv://kay:myRealPassword@cluster0.mongodb.net/admin";
//const uri = "mongodb+srv://ashishdaga:aaailu@cluster0-qab
k1.mongodb.net/test";
 var uri = "mongodb+srv://ashishdaga:aaailu@cluster0-qabk1.mongodb.net/servicesContacts";
var str = "default value"; 


app.get('/getUserList', function (req, res) {
   const client = new MongoClient(uri, { useNewUrlParser: true });
   client.connect(err => {
      const collection = client.db("servicesContacts").collection("technicianProfile").find();
      /* var records = Array;
      collection.find().toArray(function(err, records){
         console.log("000Check #s of records:"+ records.length);
      });

      console.log("Outside method -- Check #s of records:"+ records.length); */


       console.log("@@@11 I am in DB connection.... @@@@ -- check collection count:" + collection.count());
       str="";
//       collection.find();
       collection.forEach(function(myDoc){
         asynchronous(function(data){


         });

         console.log( "22inside {} branckets");
            str = str + myDoc.name;
           console.log( "33user: " + myDoc.name ); 
           console.log("44str:"+str);
         
         },
         console.log("@@55 after {} brackets")
         );

         /* for (const item of records) {
            //await delayedLog(item);
            str = str + item.name;
          } 
          console.log('222 loop Done! Str:' + str);*/

      console.log("@@@66 - out of that connect method and now abt to send resp back");
      console.log(str);
      res.end( str );  
      client.close();
      console.log("@@@77  - after response  end method");
    });
})

var  mongodburi = "mongodb+srv://ashishdaga:aaailu@cluster0-qabk1.mongodb.net/onlinestore";
mongoose.Promise = global.Promise;

app.get('/getListTest', function(req, res){

   mongoose.connect(mongodburi);
   var mongoose = require('mongoose'),
    Product = mongoose.model('Products');
    Product.find({}, function(err, product) {
      if (err)
        res.send(err);
        console.log("222 - inside products methods to get list of prods");
        console.log(product);
      res.json(product);
    });
});

app.get('/getUserList22', function (req, res) {
  /*  const client = new MongoClient(uri, { useNewUrlParser: true });
   mongoose.Promise = global.Promise;
   client.connect(uri); */

   var  mongodburi = "mongodb+srv://ashishdaga:aaailu@cluster0-qabk1.mongodb.net/servicesContacts";
   mongoose.Promise = global.Promise;
   mongoose.connect(mongodburi);

   
    TechList = mongoose.model('servicesContacts','technicianProfile');
    TechList.find({}, function(err, temlist){
      if(err)
         res.send(err);

      console.log("2222 list of team members");
      console.log(teamlist);
      //res.send(teamlist);
    });

  /*  client.connect(err => {
      const collection = client.db("servicesContacts").collection("technicianProfile").find();
       console.log("@@@11 I am in DB connection.... @@@@ -- check collection count:" + collection.count());
       str="";
       collection.find({}, function(err, temlist){
         if(err)
            res.send(err);

         console.log("2222 list of team members");
         console.log(teamlist);
         //res.send(teamlist);
       });
       collection.forEach( function(myDoc){
         console.log( "22inside {} branckets");
            str = str + myDoc.name;
           console.log( "33user: " + myDoc.name ); 
           console.log("44str:"+str);

         },
         console.log("@@55 after {} brackets")
         );
      console.log("@@@66 - out of that connect method and now abt to send resp back");
      console.log(str);
      res.end( str );  
      client.close();
      console.log("@@@77  - after response  end method");
    }); */
})


app.get('/getUserList33', function (req, res) {
   console.log("00 - method called");
   const client = new MongoClient(uri, { useNewUrlParser: true });
   client.connect(err => {
      const collection = client.db("servicesContacts").collection("technicianProfile");

      collection.find({}, function(err, record){
         console.log("11  -- inside find function");
         console.log(record);
         if (err)
            res.send(err);

         console.log("22  -- just before sending the response "+record.length);
         res(record);
      });      
      client.close();
      console.log("@@@77  - after closing connections");
    });
})

/* 
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  //const collection = client.db("test").collection("devices");
  const collection = client.db("servicesContacts").collection("technicianProfile").find();
 // perform actions on the collection object

   console.log("@@@ I am in DB connection.... @@@@ -- check collection:");
   collection.each(function(err, doc) {
      console.log(doc);
  });
   
  console.log(collection);
  client.close();
}); */

//other working methods ---------------

var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

app.post('/addUser', function (req, res) {
   // First read existing users.
   console.log("inside add user method");
   fs.readFile( '../assets/dataFiles' + "/" + "userData.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user4"] = user["user4"];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})


app.get('/userDetails/:id', function (req, res) {
   // First read existing users.
   console.log("inside get id method");
   fs.readFile( '../assets/dataFiles' + "/" + "userData.json", function (err, data) {
       users: Object;
       users = JSON.parse( data )['body']['teamMembers'];
      console.log(users);
      console.log(users.length);
      //var user = lodash.filter(users, {'id':'2'});

      var user = lodash.find(users, { 'id': parseInt(req.params.id) });
      //var user = find(users, { 'id': parseInt(id) });
      //var user = users["user" + req.params.id] 

      console.log( user );
      res.end( JSON.stringify(user));
   });
})





