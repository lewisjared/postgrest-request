'use strict';

var request = require('superagent');

var defaultOptions = function() {
    return {
        baseUrl: ''
    }
};

var options = defaultOptions();

var postgrest = function(uri, options, data) {
    return request(uri, options, data);
};

postgrest.init = function (opts) {
    options = opts;
};


exports = module.exports = postgrest;
