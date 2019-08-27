import reduceValues from "@unction/reducevalues";
import attach from "@unction/attach";
export default function fromArrayToObject (array) {
  return reduceValues((accumulated) => ([key, value]) => attach(key)(value)(accumulated))({})(array);
}
