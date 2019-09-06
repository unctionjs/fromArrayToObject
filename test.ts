
import fromArrayToObject from "./index.ts";

test(() => {
  expect(fromArrayToObject([["aaa", "1"], ["bbb", "2"]])).toEqual({
    aaa: 1,
    bbb: 2,
  });
});
