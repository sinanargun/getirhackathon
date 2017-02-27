var express = require('express');
var router = express.Router();
var record = require('../controllers/recordController.js');

/* GET home page. */
router.get('/', function(req, res) {
  return res.send(true);
        
});

router.post('/getRecord', function(req, res) {
 
  return record.getRecord(req,res);

});


module.exports = router;
