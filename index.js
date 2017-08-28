import reduceValues from "@unction/reducevalues"
import attach from "@unction/attach"

export default function fromArrayToObject (array: Array<[KeyType, ValueType]>): ObjectType {
  return reduceValues(
    (accumulated: ObjectType): Function =>
      ([key, value]: [KeyType, ValueType]): ObjectType =>
       attach(key)(value)(accumulated)
    )(
      {}
    )(
      array
    )
}
