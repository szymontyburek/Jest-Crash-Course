const ajax = require("./async.js");

describe("ajax testing", () => {
  test("should return correct todo - promise", () => {
    ajax(3).then((todo) => {
      expect(todo.id).toBe(3);
    });
  });

  test("should return correct todo - await", async () => {
    const todo = await ajax(4);
    expect(todo.id).toBe(4);
  });
});
