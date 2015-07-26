'use strict';

var superagent = require('superagent');
var util = require('util');

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
  console.log('connecting to ' + this.url);
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

module.exports = Request;
