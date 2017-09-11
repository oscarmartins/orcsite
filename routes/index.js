var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/',ensureAuthenticated, function(req, res){
	const user = req.user;	
	res.render('index',{user:user});
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;