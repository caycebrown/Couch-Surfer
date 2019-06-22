const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    console.log('You have hit the api route')
    res.end();
});

router.post('/', function(req, res){
    console.log(req.body);
    res.end();
});

module.exports = router;