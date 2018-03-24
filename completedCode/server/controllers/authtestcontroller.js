var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var AuthTestModel = sequelize.import('../models/authtest');

router.get('/one', function (req, res) {
	var userid = req.user.id;

	AuthTestModel
		.findAll({
			where: { owner: userid }
		})
		.then(
			function findAllSuccess(data) {
				res.json(data);
			},
			function findAllError(err) {
				res.send(500, err.message);
			}
		);
});

router.post('/create', function (req, res) {
	var owner = req.user.id;
	var authTestData = req.body.authtestdata.item;

	AuthTestModel
		.create({
			authtestdata: authTestData,
			owner: owner
		})
		.then(
			function createSuccess(authtestdata) {
				res.json({
					authtestdata: authtestdata
				});
			},
			function createError(err) {
				res.send(500, err.message);
			}
		);
});

router.get('/:id', function(req, res) {
	var data = req.params.id;
	var userid = req.user.id;

	AuthTestModel
		.findOne({
			where: { id: data, owner: userid }
		}).then(
			function findOneSuccess(data) {
				res.json(data);
			},
			function findOneError(err) {
				res.send(500, err.message);
			}
		);
});


router.put('/update/:id', function(req, res) {
	var authtestdata = req.body.authtestdata.item;
	var userid = req.user.id;
	var data = req.params.id;


    AuthTestModel
    	.update(
    	{
    		authtestdata: authtestdata
    	},

    	{where: {owner: userid, owner: userid}}
    	).then(
    		function updateSuccess(updatedLog) {
    			res.json(updatedLog);
    		},
    		function updateError(err){
    			res.send(500, err.message);
    		}
    	)
});




module.exports = router;