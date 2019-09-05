import reduceValues from "@unction/reducevalues";
import attach from "@unction/attach";
import {ObjectType} from "./types";

export default function fromArrayToObject<A> (array: Array<[string | number, A]>) {
  return reduceValues(
    (accumulated: ObjectType<A>) =>
      ([key, value]: [string | number, A]) =>
        attach(key)(value)(accumulated)
  )(
    {}
  )(
    array
  );
}
