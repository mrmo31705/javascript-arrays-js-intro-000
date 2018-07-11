var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];



function addElementToBeginningOfArray("cat", "dog"); {
  addElementToBeginningOfArray.push("mouse");
}

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
