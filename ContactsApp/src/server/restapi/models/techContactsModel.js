var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var techInfoSchema = new Schema({
  name: { type: String, Required:  'Tech name cannot be left blank.' },
  cell:    { type: String,     Required:  'Tech cell cannot be left blank.'},
  email:    { type: String,     Required:  'eamil  cannot be left blank.'},
  location: { type: String,     Required:  'location  cannot be left blank.'},
  skills: { type: String,     Required:  'skills  cannot be left blank.'}
});

/* Note: If we don't pass the collection name- by default it add 's' to model name
in this case it will add 's' as techinfos. To avoid it - explicitly pass collection name. 
more info here:
https://stackoverflow.com/questions/10547118/why-does-mongoose-always-add-an-s-to-the-end-of-my-collection-name */

module.exports = mongoose.model('techRecords', techInfoSchema, 'techinfo');