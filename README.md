# @unction/fromArrayToObject

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> Array<[KeyType, ValueType]> => ObjectType

Takes an array that looks like a primitive Object and turns it into a proper object. Duplicate keys get overwritten.

``` javascript
fromArrayToObject([["aaa", "1"], ["bbb", "2"]]) // {aaa: 1, bbb: 2}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/fromArrayToObject.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/fromArrayToObject.svg?maxAge=2592000&style=flat-square
