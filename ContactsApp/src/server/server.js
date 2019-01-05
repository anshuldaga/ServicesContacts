var express = require('express');
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

const MongoClient = require('mongodb').MongoClient;

//const uri = "mongodb+srv://kay:myRealPassword@cluster0.mongodb.net/admin";
//const uri = "mongodb+srv://ashishdaga:aaailu@cluster0-qabk1.mongodb.net/test";
const uri = "mongodb+srv://ashishdaga:aaailu@cluster0-qabk1.mongodb.net/servicesContacts";
var str = "default value";



app.get('/getUserList', function (req, res) {
   const client = new MongoClient(uri, { useNewUrlParser: true });
   client.connect(err => {
      //const collection = client.db("test").collection("devices");
      const collection = client.db("servicesContacts").collection("technicianProfile").find();
     // perform actions on the collection object
    
       console.log("@@@11 I am in DB connection.... @@@@ -- check collection count:" + collection.count());
       str="";
       collection.forEach( function(myDoc){
         console.log( "inside {} branckets");
            str = str + myDoc.name;
           console.log( "user: " + myDoc.name ); 
           console.log("str:"+str);

         },
         console.log(" after {} brackets")
         );

      /*  collection.each(function(err, item) {
         if (item != null) {
            str = str + "Employee Name:" + item.name + "  ";
            console.log("inside each method:");
            console.log(str);
         }          
      }); */      
      //console.log(collection);
      console.log("@@@22 - out of that connect method and now abt to send resp back");
      console.log(str);
      res.end( str );  
      client.close();
      
      console.log("@@@33  - after response  end method");
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





