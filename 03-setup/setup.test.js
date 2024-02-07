let animals;

beforeEach(() => {
  animals = ["elephant", "zebra", "bear", "tiger"];
});

describe("animals array", () => {
  test("should add animal to end of array", () => {
    animals.push("monkey");
    expect(animals[animals.length - 1]).toBe("monkey");
  });
  test("should add animal to beginning of array", () => {
    animals.unshift("alligator");
    expect(animals[0]).toBe("alligator");
  });
  test("should have length of 4", () => {
    expect(animals.length).toBe(4);
  });
});
