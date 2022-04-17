const checkIfEqual = require('../lib/random.js');

test('checks if 10 is equal to 10', () => {
    expect(checkIfEqual(20, 20)).toBe(true);
});

