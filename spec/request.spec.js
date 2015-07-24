'use strict';

var request = require('../lib/request');
var superagent = require('superagent');
var jasmine = require('jasmine');

describe('request', function () {
  beforeEach(function () {
    this.instance = request.create();
  });

  /**
   *
   */
  describe('options', function () {
    it('should create instance with custom opts', function () {
      var opts = {
        name: 'local',
        default: true,
        host: 'api.postgrest.org',
        port: 3000,
        method: 'http'
      };
      var instance = request.create(opts);

      expect(instance.options).toEqual(opts);
    });

    it('should determine the url from options', function () {
      var instance = request.create();
      expect(instance.url).toEqual('http://localhost:3000');
    });

    it('should merge options with defaults', function () {
      var opts = {
        port: 4000
      };
      var instance = request.create(opts);
      var url = 'http://localhost:4000';

      expect(instance.url).toEqual(url);
      expect(instance.options).toEqual({
        host: 'localhost',
        port: 4000,
        method: 'http'
      });
    })
  });


  it('should create a new instance', function () {
    var instance2 = request.create();
    expect(this.instance).not.toBe(instance2);
  });

  it('should call superagent', function () {
    this.instance.request('GET', '/test', {
      eq: {
        key: 'value'
      }
    });
  })

});
