const ALERT_SHOW_TIME = 5000;

const getRandomPositiveInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }
  if (min > max) {
    const temp = min;
    [min, max] = [max, min];
    max = temp;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const checkLength = (string, maxLength = 140) => string.length <= maxLength;

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export {
  showAlert,
  getRandomPositiveInteger,
  checkLength,
  getRandomArrayElement,
  isEscapeKey
};
