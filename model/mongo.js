/**
 * Created by Viswanathan M B on 16/07/2016.
 */


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/healthdatadb');

var mongoSchema =   mongoose.Schema;
// create schema
var userSchema  = {
    username:String,
    shim:String,
    distance:String
};
// create model if not exists.
module.exports = mongoose.model('healthdata',userSchema);


