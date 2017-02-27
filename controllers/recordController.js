

var Record = require('../models/recordModel.js');


exports.getRecord = function(req,res){
  
  var query =  Record.find();

  var key = req.body.key;

  if (typeof key != 'undefined') {

  query.where( { key: key })

  query.exec(function(err,results){
      
      console.log("Debug:" + results); 

  }); 
    res.send(true);
  }
  else{
     res.send(false);
  }
  

  
};

