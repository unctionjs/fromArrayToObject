
import fromArrayToObject from "./index";

test("works", () => {
  expect(fromArrayToObject([["aaa", "1"], ["bbb", "2"]])).toEqual({
    aaa: 1,
    bbb: 2,
  });
});
