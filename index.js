'use strict';

var Hapi = require('hapi');
var routes = require('./routes');
process.env.PORT = process.env.PORT || 8080;
  //Types = require('hapi').types;


var config = { };

var server = new Hapi.Server(+process.env.PORT, '0.0.0.0', config);

server.addRoutes(routes);

server.start();

