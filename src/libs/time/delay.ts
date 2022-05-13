const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
};

const delay = (min: number, max: number) => new Promise((resolve) => resolve(1));
// new Promise((resolve) => setTimeout(resolve, getRandomInt(min, max)));

export default delay;
