var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();
router.use(bodyParser.json());

router.route('/').get(function(req,res,next){
    res.setHeader('Content-Type','application/json');
    res.send(JSON.stringify({id:1,nombre:"area 1"}));
    res.end();
}).all(function(req,res,next){
    res.send(501,{status:'Not implemented'});
});

module.exports = router;