postgrest = require('../index');

describe('request', function () {
  it('exports a function', function () {
    expect(typeof(postgrest)).toBe('function');
  });
});
