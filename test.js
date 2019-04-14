/* eslint-disable flowtype/require-return-type */
import {test} from "tap";

import fromArrayToObject from "./index";

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
