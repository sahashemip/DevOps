
const calsum = require('../calculator');

test('adds 1 +2 to equal 3', () => {
    expect(calsum.sum(1,2)).toBe(3);
} );