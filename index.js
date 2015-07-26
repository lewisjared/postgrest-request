'use strict';

var Request = require('./lib/request');
var methods = require('./lib/methods');
var _ = require('lodash');

var defaultOptions = {
  host: 'localhost',
  port: 3000,
  method: 'http'
};

/**
 * Configure the module
 * @param options object
 */
var init = function (options) {
  return new Postgrest(options);
};


/**
 * Wrapper for calling the Request object
 * @param options
 * @constructor
 */
var Postgrest = function(options) {
  this.options = _.assign({}, defaultOptions, options);
};

methods.forEach(function(method) {
  Postgrest.prototype[method] = function (url) {
    return this.request(method, url);
  }
});


/**
 * Start a new request
 * @param method The HTTP verb
 * @param url Relative URL of the required resource
 * @returns {Request|exports|module.exports}
 */
Postgrest.prototype.request = function (method, url) {
  return new Request(method, url, this.options);
};

exports = module.exports = init;
