var express = require('express'),
	bodyParser = require('body-parser'),
	mongodb = require('mongodb'),
	ObjectId = mongodb.ObjectID,
	dataClient = mongodb.MongoClient,
  server = express(),
  port = process.env.PORT || 30000,
  staticRoot = __dirname;

function primeDatabase () {
	dataClient.workouts.find({}).toArray(function(e,workouts){
		console.log('priming database');
		if (e) {
			throw new Error(e);
		} else {
			if (!workouts.length) {
				dataClient.workouts.insert({
					type:'Anaerbolic',
					start:new Date('2014/01/01 00:00:00').toString(),
					end:new Date('2014/01/01 00:01:00').toString()
				},function(e,workouts){
					if (e) {
						throw new Error(e);
					} else {
						var workout = workouts[0];
						dataClient.sets.insert({
							name: 'Flat Bench Press',
							weight: '225',
							X: '12',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
						dataClient.sets.insert({
							name: 'Flat Bench Press',
							weight: '245',
							X: '10',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
						dataClient.sets.insert({
							name: 'Flat Bench Press',
							weight: '265',
							X: '8',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
						dataClient.sets.insert({
							name: 'Lateral Pulldowns',
							weight: '235',
							X: '12',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
						dataClient.sets.insert({
							name: 'Lateral Pulldowns',
							weight: '245',
							X: '10',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
						dataClient.sets.insert({
							name: 'Lateral Pulldowns',
							weight: '255',
							X: '8',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
					}
				});
				dataClient.workouts.insert({
					type:'Anaerbolic',
					start:new Date('2014/01/03 00:00:00').toString(),
					end:new Date('2014/01/03 00:01:00').toString()
				},function(e,workouts){
					if (e) {
						throw new Error(e);
					} else {
						var workout = workouts[0];
						dataClient.sets.insert({
							name: 'Squats',
							weight: '300',
							X: '12',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
						dataClient.sets.insert({
							name: 'Squats',
							weight: '315',
							X: '10',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
						dataClient.sets.insert({
							name: 'Squats',
							weight: '315',
							X: '8',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
						dataClient.sets.insert({
							name: 'Military Press',
							weight: '175',
							X: '12',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
						dataClient.sets.insert({
							name: 'Military Press',
							weight: '185',
							X: '10',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
						dataClient.sets.insert({
							name: 'Military Press',
							weight: '195',
							X: '8',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
					}
				});
				dataClient.workouts.insert({
					type:'Anaerbolic',
					start:new Date('2014/01/05 00:00:00').toString(),
					end:new Date('2014/01/05 00:01:00').toString()
				},function(e,workouts){
					if (e) {
						throw new Error(e);
					} else {
						var workout = workouts[0];
						dataClient.sets.insert({
							name: 'Flat Bench Press',
							weight: '235',
							X: '12',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
						dataClient.sets.insert({
							name: 'Flat Bench Press',
							weight: '255',
							X: '10',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
						dataClient.sets.insert({
							name: 'Flat Bench Press',
							weight: '275',
							X: '8',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
						dataClient.sets.insert({
							name: 'Lateral Pulldowns',
							weight: '245',
							X: '12',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
						dataClient.sets.insert({
							name: 'Lateral Pulldowns',
							weight: '265',
							X: '10',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
						dataClient.sets.insert({
							name: 'Lateral Pulldowns',
							weight: '275',
							X: '8',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
					}
				});
				dataClient.workouts.insert({
					type:'Anaerbolic',
					start:new Date('2014/01/07 00:00:00').toString(),
					end:new Date('2014/01/07 00:01:00').toString()
				},function(e,workouts){
					if (e) {
						throw new Error(e);
					} else {
						var workout = workouts[0];
						dataClient.sets.insert({
							name: 'Squats',
							weight: '300',
							X: '12',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
						dataClient.sets.insert({
							name: 'Squats',
							weight: '325',
							X: '10',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
						dataClient.sets.insert({
							name: 'Squats',
							weight: '335',
							X: '8',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
						dataClient.sets.insert({
							name: 'Military Press',
							weight: '185',
							X: '12',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
						dataClient.sets.insert({
							name: 'Military Press',
							weight: '195',
							X: '10',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
						dataClient.sets.insert({
							name: 'Military Press',
							weight: '205',
							X: '8',
							wid: workout._id
						},function(e,sets){
							if (e) {
								throw new Error(e);
							} else {
								var set = sets[0];
							}
						});
					}
				});
				console.log('database primed');
			} else {
				console.log('database primed');
			}
		}
	})
}

function dataClient_connectHandler (e,db){
	if (e) {
		throw new Error(e);
	} else {
		console.log('connected to database');
		dataClient.db = db;
		dataClient.workouts = db.collection('workouts');
		dataClient.sets = db.collection('sets');
		primeDatabase();
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
	server.get('/workouts/:wid',function(q,r){
		dataClient.workouts.findOne({_id:new ObjectId(q.params.wid)},function(e,workout){
			if (e) {
				r.send({error:e});
				throw new Error(e);
			} else {
				r.send(workout);
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
	server.get('/workouts/:wid/sets',function(q,r){
		dataClient.sets.find({wid:new ObjectId(q.params.wid)}).toArray(function(e,sets){
			if (e) {
				r.send({error:e});
				throw new Error(e);
			} else {
				r.send({sets:sets});
			}
		});
	});
	server.get('/workouts/:wid/sets/names',function(q,r){
		dataClient.sets.find({wid:new ObjectId(q.params.wid)}).toArray(function(e,sets){
			if (e) {
				r.send({error:e});
				throw new Error(e);
			} else {
				var names = [];
				for (var j in sets) {
					if (!names[sets[j].name]) {
						names[sets[j].name] = sets[j].name;
					}
				}
				var _names = [];
				for (var j in names) {
					_names.push(j);
				}
				r.send({names:_names});
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