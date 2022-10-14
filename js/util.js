// function checkStringLength (string, length) {
//   return string.length <= length;
// }

// checkStringLength();

function getRandomIntInclusive(min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

export {getRandomArrayElement};
export {getRandomIntInclusive};