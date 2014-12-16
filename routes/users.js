var express = require('express');
var router = express.Router();


var users = ['choi', 'kim', 'park', 'lee', 'cho'];
/* GET users listing. */
router.get('/:from-:to', function(req, res) {
	
	var from = parseInt(req.params.from, 10);
	var to = parseInt(req.params.to, 10);
	
	res.json(users.slice(from, to + 1 ));

//  res.send('respond with a resource');
});

module.exports = router;
