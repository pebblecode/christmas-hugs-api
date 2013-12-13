'use strict';

var Hapi = require('hapi');
var routes = require('./routes');
  //Types = require('hapi').types;


var config = { };
var server = new Hapi.Server('0.0.0.0', 8080, config);

server.addRoutes(routes);

server.start();

