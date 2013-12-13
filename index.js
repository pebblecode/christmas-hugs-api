'use strict';

var Hapi = require('hapi');
var routes = require('./routes');
var port = process.env.PORT || 8080;
  //Types = require('hapi').types;


var config = { };
var server = new Hapi.Server('0.0.0.0', port, config);

server.addRoutes(routes);

server.start();

