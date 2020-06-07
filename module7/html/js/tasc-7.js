const fontSize = document.querySelector('#font-size-control');
const outputText = document.querySelector('#text');

fontSize.addEventListener('input', event => {
  outputText.style.fontSize = `${event.target.value}px`;
});
