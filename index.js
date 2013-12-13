'use strict';

var Hapi = require('hapi');
var MongoClient = require('mongodb').MongoClient;

process.env.PORT = process.env.PORT || 8080;

MongoClient.connect('mongodb://pebble:pebble@ds057568.mongolab.com:57568/heroku_app20334957', function (err, db) {

  if (err)  { throw err; }

  var server = new Hapi.Server(+process.env.PORT, '0.0.0.0');

  function getHugs(request) {
    db.collection('hugs', function (err, collection) {
      collection.find().toArray(function (err, items) {
        request.reply(items);
      });
    });
  }

  function createHug(request) {
    var hug = request.payload;
    db.collection('hugs', function (err, collection) {
      collection.insert(hug, function (err) {
        if (err) { throw err; }
        request.reply(201);
      });
    });
  }

  server.route({
    method: 'GET',
    path: '/hugs',
    config: {
      handler: getHugs
    }
  });

  server.route({
    method: 'POST',
    path: '/hugs',
    config: {
      handler: createHug,
      payload: 'parse'
    }
  });

  server.start();

});

