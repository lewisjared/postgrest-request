'use strict';

var superagent = require('superagent');
var util = require('util');
var _ = require('lodash');
var filters = require('./filters');



var createUrl = function (opts) {
  return opts.method + '://' + opts.host + ':' + opts.port;
};

/**
 * Request object.
 * This object inherits superagent.Request and overrides some of the superagent functionality.
 *
 * @param opts Options object
 * @constructor
 */
function Request(method, url, opts) {
  superagent.Request.call(this, method, url);
  this.options = opts;
  this.baseUrl = createUrl(this.options);
  this.url = this.baseUrl + url;
  this.version(1);
};

util.inherits(Request, superagent.Request);

Request.prototype.where = function (opts) {
  var self = this;
  var parsedFilters = filters.parse(opts);

  parsedFilters.forEach(function(f) {
    self.query(f);
  });
  return this;
};

Request.prototype.accept = function() {
  //Ignore accept calls as postgrest always returns JSON
};


/**
 * Sets the API version to request.
 *
 * See https://github.com/begriffs/postgrest/wiki/API-Versioning
 * @param version
 * @returns {Request} for chaining
 */
Request.prototype.version = function(version) {
  if (_.isFinite(version)) {
    this.set('accept', 'version=' + version);
  }
  return this;
};

module.exports = Request;
