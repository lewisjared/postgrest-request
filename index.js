'use strict';

var request = require('./lib/request');

var getDefaultInstance = function() {
  if (_.isUndefined(defaultInstance)) {
    throw 'default instance not defined';
  }

  return defaultInstance;
}

var instances = [request.create()];
var defaultInstance = instances[0];

var postgrest = function(uri, options, data) {
  return getDefaultInstance.request(uri, options, data);
};

postgrest.addInstance = function (opts, name) {
  var instance = request.create(opts);

  if (_.isUndefined(name)) {
    name = '__undefined__';
  }

  instances[name] = instance;
  this[opts.name] = instance;
};

exports = module.exports = postgrest;
