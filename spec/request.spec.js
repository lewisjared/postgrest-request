'use strict';

var Request = require('../lib/request');
var superagent = require('superagent');
var jasmine = require('jasmine');

var opts = require('../index').defaults;

describe('request', function () {

  describe('version', function () {
    beforeEach(function () {
      this.request = new Request('get', '/', opts);
    });

    it('should add default to version 1', function () {
      expect(this.request.req._headers.accept).toEqual('version=1');
    });

    it('should ignore accept function', function() {
      this.request.accept('json');
      expect(this.request.req._headers.accept).toEqual('version=1');
    });

    it('should add accept header', function () {
      this.request.version(2);

      expect(this.request.req._headers.accept).toEqual('version=2');
    });

    it('should add accept header', function () {
      this.request.version(2);

      expect(this.request.req._headers.accept).toEqual('version=2');
    });

    it('should request the major version', function () {
      this.request.version(2.1);

      expect(this.request.req._headers.accept).toEqual('version=2');
    });


  })
});
