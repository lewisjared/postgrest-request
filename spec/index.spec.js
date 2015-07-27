postgrest = require('../index');

describe('index', function () {
  it('exports a function', function () {
    expect(typeof(postgrest)).toBe('function');
  });

  it('should accept configuration', function () {
    var options = {
      test: "blah"
    }
    var p = postgrest(options);

    expect(p.options.test).toEqual(options.test)
  });

  it('should create instance with custom opts', function () {
    var opts = {
      name: 'local',
      default: true,
      host: 'api.postgrest.org',
      port: 3000,
      method: 'http'
    };
    var p = postgrest(opts);

    expect(p.options).toEqual(opts);
  });

  it('should merge options with defaults', function () {
    var opts = {
      port: 4000
    };
    var p = postgrest(opts);

    expect(p.options).toEqual({
      host: 'localhost',
      port: 4000,
      method: 'http'
    });
  });

});
