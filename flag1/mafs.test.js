const { add, subtract, multiply, divide, sum } = require("./mafs");

// test("adds 1 + 2 to equal 3", () => {
//   expect(add(1, 2)).toBe(3);
// });

test('subtracts 4 - 1 to equal 3', () => {
    expect(subtract(4, 1)).toBe(3);
});

test('multiplies 5 * 6 to equal 30', () => {
    expect(multiply(5, 6)).toBe(30);
});

test('divides 6 / 0 to equal 0', () => {
    expect(divide(6, 0)).toBe(0);
});

test('divides 8 / 2 to equal 4', () => {
    expect(divide(8, 2)).toBe(4);
});

test('sums 1 + 2 + 3 + 4 to equal 10', () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
});

test('sums none to equal 0', () => {
    expect(sum()).toBe(0);
});
