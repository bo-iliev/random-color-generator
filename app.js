const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const button = document.querySelector('button');

button.addEventListener('click', function () {
  let newColor = color();
  document.body.style.backgroundColor = newColor;
  h1.innerText = newColor;
  h2.style.textShadow = '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white';
});

function color() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
