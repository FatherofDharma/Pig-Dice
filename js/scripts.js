//this function was brought to you in part by https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomNumber(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

console.log(getRandomNumber(1, 7));
