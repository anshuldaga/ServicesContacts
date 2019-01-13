var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var technicianProfileSchema = new Schema({

  name: { type: String, Required:  'Tech name cannot be left blank.' },  
  cell:    { type: String,     Required:  'Tech cell cannot be left blank.'},
  email:    { type: String,     Required:  'eamil  cannot be left blank.'},
  location: { type: String,     Required:  'location  cannot be left blank.'}

});
console.log("@@ inside model ... before export");

module.exports = mongoose.model('test', technicianProfileSchema);

module.exports = mongoose.model('products', technicianProfileSchema);

var techInfoSchema = new Schema({
  name: { type: String, Required:  'Tech name cannot be left blank.' }
});

/* Note: If we don't pass the collection name- by default it add 's' to model name
in this case it will add 's' as techinfoCHECKs 
more info here:
https://stackoverflow.com/questions/10547118/why-does-mongoose-always-add-an-s-to-the-end-of-my-collection-name */

module.exports = mongoose.model('techlist', techInfoSchema, 'techinfo');

module.exports = mongoose.model('techDetails', techInfoSchema, 'techinfo');
