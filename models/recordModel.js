var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Schema = mongoose.Schema;



var schema = new Schema({});

module.exports = mongoose.model('Record', schema);