function freezeObject() {
  "use strict";

  const MATH = {
    PI: 3.14
  }

  Object.freeze(MATH);

  try {
    MATH.PI = 99;
  } catch (e) {
    console.log(e);
  }

  console.log("Update pi is " + MATH.PI);
}

freezeObject();