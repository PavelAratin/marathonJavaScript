import { btn, color } from "./constants";
import { generateHexColor } from "./generateHexColor";

export function app() {
  btn.addEventListener('click', function () {
    let hexColor = generateHexColor();
    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor;

  })
}