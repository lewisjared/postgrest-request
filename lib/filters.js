'use strict';

var _ = require('lodash');

/**
 * Valid options for filter options
 */
var validFilters = [
  'lt',
  'gt',
  'eq',
  'neq',
  'lte',
  'gte',
  'like',
  'ilike',
  'is',
  'isnot',
  'in'
];
/**
 * Parses a filter to produce the URL query parameters
 * @param key Type of filer
 * @param value Object containing keys to filter
 * @returns Collection of filter strings
 */
var parseFilter = function (value, type) {
  if (_.contains(validFilters, type)) {
    return _.map(value, function (v, k) {
      return k + '=' + type + '.' + v
    });
  }
};

/**
 * Parse the filters from the options object
 * @param opts list of filters
 */
var parse = function (opts) {
  var filters = _.flatten(_.map(opts, parseFilter));

  if (filters.length === 1 && filters[0] === undefined) {
    filters = [];
  }
  return filters;
};

module.exports.parse = parse;
module.exports.validFilters = validFilters;
