
import {test} from "tap";

import fromArrayToObject from "./";

test(({same, end}) => {
  same(
    fromArrayToObject([["aaa", "1"], ["bbb", "2"]]),
    {
      aaa: 1,
      bbb: 2,
    }
  );

  end();
});
