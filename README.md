# Postgres-request
![Travis build status](https://travis-ci.org/lewisjared/postgrest-request.svg?branch=master)

Providing a interface to query a [postgrest](https://github.com/begriffs/postgrest) instance.

## Installation
```
npm install postgrest-request
```

## Usage
postgrest-request wraps the functionality of [superagent](http://visionmedia.github.io/superagent/). Therefore the query syntax is identical. Full
documentation for building queries is available from [superagent](http://visionmedia.github.io/superagent/).

The following code segment queries https://postgrest.herokuapp.com/festival

```
var config = {
  host: 'postgrest.herokuapp.com',
  method: 'https',
  post: 443
};
var postgrest = require('postgrest-request')(config);

postgrest.get('/festival')
  .end(function (err, data ) {
    console.log(err, data.body);
  });
```

### Filtering
The request can be filtered using the `.where()` option. The following code snippet gets all festivals with a rating greater than 7.
```
postgrest.get('/festival')
  .where({
    gt: {
      rating: 7
    }
  })
  .end(function (err, data ) {
    console.log(err, data.body);
  });
```
See https://github.com/begriffs/postgrest/wiki/Routing#filtering for filtering options

### Versioning
A particular version of the API can be requested by chaining a call to `version(versionNumber)`. This will set the `accept` header of the request.
Calls to the superagent function `accept` will be ignored as postgrest always returns JSON and ignores the requested application type.
By default version 1 of the API is requested. Examples for implementing schemas with versioning is available [here](https://github.com/begriffs/postgrest/wiki/API-Versioning)

## License
MIT
