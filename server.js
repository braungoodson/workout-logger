var express = require('express'),
	bodyParser = require('body-parser'),
	mongodb = require('mongodb'),
	dataClient = mongodb.MongoClient,
  server = express(),
  port = process.env.PORT || 30000,
  staticRoot = __dirname;

function dataClient_connectHandler (e,db){
	if (e) {
		throw new Error(e);
	} else {
		console.log('connected to database');
		dataClient.db = db;
		dataClient.workouts = db.collection('workouts');
		dataClient.sets = db.collection('sets');
		configServer();
	}
}

function configServer () {
	console.log('configuring server');
	server.use(bodyParser());
	server.use('/', express.static(staticRoot));
	server.listen(port);
	console.log('server up on port '+port);
	server.get('/workouts',function(q,r){
		dataClient.workouts.find({}).toArray(function(e,workouts){
			if (e) {
				r.send({error:e});
				throw new Error(e);
			} else {
				r.send({workouts:workouts});
			}
		});
	});
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
	server.get('/sets',function(q,r){
		dataClient.sets.find({}).toArray(function(e,sets){
			if (e) {
				r.send({error:e});
				throw new Error(e);
			} else {
				r.send({sets:sets});
			}
		});
	});
	server.post('/sets',function(q,r){
		var set = q.body;
		dataClient.sets.insert(set,function(e,sets){
			if (e) {
				r.send({error:e});
				throw new Error(e);
			} else {
				r.send(sets[0]);
			}
		})
	});
}

console.log('configuring database');
dataClient.connect('mongodb://localhost:27017/workoutlogger',dataClient_connectHandler);