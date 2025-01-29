const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World I am Mario Cortez from Monterrey city in the north of Mexico");
  });
});
