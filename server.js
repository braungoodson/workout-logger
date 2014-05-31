var express = require('express'),
	bodyParser = require('body-parser'),
	mongodb = require('mongodb'),
	dataClient = mongodb.MongoClient,
  server = express(),
  port = process.env.PORT || 30000,
  staticRoot = __dirname;

console.log('configuring database');

dataClient.connect('mongodb://localhost:27017/workoutlogger',function(e,db){
	if (e) {
		throw new Error(e);
	} else {
		console.log('connected to database');
		dataClient.db = db;
		dataClient.workouts = db.collection('workouts');
		configServer();
	}
});

function configServer () {
	console.log('configuring server');
	server.use(bodyParser());
	server.use('/', express.static(staticRoot));
	server.listen(port);
	console.log('server up on port '+port);
	server.post('/workouts',function(q,r){
		var workout = q.body;
		dataClient.workouts.insert(workout,function(e,workouts){
			if (e) {
				r.send({error:e});
				throw new Error(e);
			} else {
				r.send(workouts[0]);
			}
		});
	});
}