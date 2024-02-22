/**
 * removes data.attributes from all depths
 * For Example
 * ```js
 * const before = {data: {attributes: {a: "", b: {data: {attributes: {c: 1}}}}}}
 * const after = attributesParser(before)
 * // {a: "", b: {c: 1}}
 * ```
 * @param {any} obj
 * @returns a POJO with reduced depth
 */
export default function attributesParser(obj) {
  if (obj == null) return undefined;

  // return as is for primitive values
  if (typeof obj !== "object") return obj;

  // handles 1-to-many relation data
  if (obj instanceof Array) {
    if (obj[0] && "attributes" in obj[0]) {
      return obj.map(({ attributes }) => attributesParser(attributes));
    }
    return obj.map(attributesParser);
  }

  if (obj.data instanceof Array) {
    return obj.data.map(({ attributes }) => attributesParser(attributes));
  }

  if (obj.data === null) return null;

  // if data is missing from obj, then obj is a POJO
  // !fails if there is a property named "data"
  const attributes = "data" in obj ? obj.data.attributes : obj;
  const parsedAttributes = {};

  for (let key in attributes) {
    parsedAttributes[key] = attributesParser(attributes[key]);
  }

  return parsedAttributes;
}
