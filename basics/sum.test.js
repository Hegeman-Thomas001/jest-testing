const { sum, helloWorld } = require('./sum');


test(`adds 1 + 2 to equal 3`, () => {
  expect(sum(1, 2)).toBe(3);
});

describe('Hello World', function () {
  test('says "Hello, World!"', () => {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
