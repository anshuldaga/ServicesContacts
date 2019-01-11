var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var technicianProfileSchema = new Schema({

  name: { type: String, Required:  'Tech name cannot be left blank.' },  
  cell:    { type: String,     Required:  'Tech cell cannot be left blank.'},
  email:    { type: String,     Required:  'eamil  cannot be left blank.'},
  location: { type: String,     Required:  'location  cannot be left blank.'}

});
console.log("@@ inside model ... before export");
module.exports = mongoose.model('products', technicianProfileSchema);
//products techContacts