const colorEl = getRandomHexColor();
bodyEl.style.backgroundColor = colorEl;
spanText.textContent = colorEl;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


