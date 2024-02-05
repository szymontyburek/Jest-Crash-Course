const sum = require("./sum");

describe("example tests", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("should equate obj1 to obj2", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

describe("null tests", () => {
  test("should be null", () => {
    const n = null;
    expect(n).toBeNull();
  });
  test("should be falsy", () => {
    const n = null;
    expect(n).toBeFalsy();
  });
});

test("tested variable is greater than 3", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
});
