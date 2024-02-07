const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

test("mock callback", () => {
  const mockCalledback = jest.fn((x) => 42 + x);

  forEach([0, 1], mockCalledback);

  expect(mockCalledback.mock.calls.length).toBe(2);

  expect(mockCalledback.mock.calls[0][0]).toBe(0);

  expect(mockCalledback.mock.calls[1][0]).toBe(1);

  expect(mockCalledback.mock.results[0].value).toBe(42);
});

test("mock return", () => {
  const mock = jest.fn();

  mock
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce("banana");

  const results = mock();
  const results2 = mock();
  const results3 = mock();

  expect(results).toBe(true);
  expect(results2).toBe(false);
  expect(results3).toBe("banana");
});
