const controls = document.querySelector('#controls');
const input = controls.firstElementChild;
const createBtn = controls.querySelector('button[data-action="render"]');
const clearBtn = controls.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');
let width = 30;
let height = 30;
let boxItems = [];

const randomBgColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const bgColor = `rgb(${r},${g},${b})`;
  return bgColor;
};

const createBox = () => {
  const box = document.createElement('div');
  box.style.width = `${width}px`;
  box.style.height = `${height}px`;
  box.style.backgroundColor = randomBgColor();
  return box;
};

const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    boxItems.push(createBox());
    width += 10;
    height += 10;
  }
  boxes.append(...boxItems);
};

createBtn.addEventListener('click', () => {
  createBoxes(Number(input.value));
});

clearBtn.addEventListener('click', () => {
  while (boxes.firstChild) {
    boxes.firstChild.remove();
  }
  boxItems = [];
  width = 30;
  height = 30;
});
