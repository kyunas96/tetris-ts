/* 
  if a value from this enumeration can be used to identify the type of a shape 
  then it can be used to determine what color should be applies to a shape and
  its blocks
*/

// enum values not explicitly defined will start at 0 and auto increment
/**
 * SINCE THIS ENUM TAKES ADVANTAGE OF AUTO INCREMENTED INTEGER VALUES, ALL
 * REFERENCES TO THIS ENUM MUST REFERENCE ENUM VALUES IN THE SAME ORDER
 */
enum ShapeNames{
  I = 1,
  J,
  L,
  O,
  S,
  T,
  Z,
}

export default ShapeNames;