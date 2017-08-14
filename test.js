/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import fromArrayToObject from "./source.js"

test(({same, end}) => {
  same(
    fromArrayToObject([["aaa", "1"], ["bbb", "2"]]),
    {
      aaa: 1,
      bbb: 2,
    }
  )

  end()
})
