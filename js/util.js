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

const isEscapeKey = (evt) => evt.key === 'Escape';

const successMessageContainer = document.querySelector('.success');
const successButton = document.querySelector('.success__button');


// const onSuccessEscKeydown = (evt) => {
//   if (isEscapeKey(evt)) {
//     evt.preventDefault();
//     document.body.removeChild(successMessageContainer);
//   }
// };

const showSuccessMessage = () => {
  const successMessage = document.querySelector('#success').content;
  document.body.appendChild(successMessage);

  // document.addEventListener('keydown', onSuccessEscKeydown);
};

// function closeSuccessMessage () {
//   document.body.removeChild(successMessageContainer);
//   document.body.classList.remove('modal-open');
// }

// successButton.addEventListener('click', () => {
//   closeSuccessMessage ();
// });

const showErrorMessage = () => {
  const errorMessage = document.querySelector('#error').content;
  document.body.appendChild(errorMessage);
};

export {getRandomArrayElement};
export {getRandomIntInclusive};
export {isEscapeKey};
export {showSuccessMessage};
export {showErrorMessage};

