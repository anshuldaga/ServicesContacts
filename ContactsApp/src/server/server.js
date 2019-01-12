var express = require('express');
var app = express();
var fs = require("fs");
var lodash= require('lodash');

app.get('/listUsers', function (req, res) {
    console.log("inside listUsers method")
   fs.readFile( '../assets/dataFiles' + "/" + "userData.json", 'utf8', function (err, data) {
       //function error is when path fails to find data file
       //whatever is in json file will go into that 'data' variable
      console.log( data );
      res.end( data );
      //responding that data back to responseData in contactlist.ts
   });
})


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


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})