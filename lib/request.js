'use strict';

var superagent = require('superagent');
var _ = require('lodash');
var filters = require('./filters');

var defaultOptions = {
  host: 'localhost',
  port: 3000,
  method: 'http'
};

var createUrl = function (opts) {
  return opts.method + '://' + opts.host + ':' + opts.port;
};

var sanitiseUrl = function (url) {
  return url;
};

/**
 * Request object.
 * This object calls superagent
 * @param opts options
 * @constructor
 */
function Request(opts) {
  this.options = _.assign({}, defaultOptions, opts);
  this.url = createUrl(this.options);
};

Request.prototype.request = function (method, url, opts) {
  var parameters = filters.parse(opts).join('&');
  var transformedUrl = this.url + sanitiseUrl(url) + '?' + parameters;
  return superagent(method, transformedUrl);
};

module.exports.create = function(opts) {
  return new Request(opts);
};
