'use strict';

debugger;

var config = {
  host: '192.168.59.103'
}

var postgrest = require('../index')(config);

postgrest.get('/festival')
  .where({
    gt: {
      rating: 7
    }
  })
  .end(function (err, data ) {
    console.log(err, data);
  });
