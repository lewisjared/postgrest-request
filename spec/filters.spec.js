'use strict';

var filters = require('../lib/filters');
var _ = require('lodash');

describe('filters', function() {
  it('should handle bad filters', function () {
    var filter = filters.parse({notafilter: {test: 'test'}});
    expect(filter).toEqual([]);
  });

  it('should expose validFilters', function () {
    var validFilters = filters.validFilters;
    expect(_.isArray(validFilters)).toBe(true);
  });

  it('should convert valid filters', function () {
    var filter = filters.parse({eq: {key: 'value'}} );
    expect(filter).toEqual(['key=eq.value']);
  });

  it('should convert multiple filters', function () {
    var filter = filters.parse({eq: {key1: 'value1', key2: 'value2'}} );
    expect(filter).toEqual(['key1=eq.value1', 'key2=eq.value2']);
  });
});
