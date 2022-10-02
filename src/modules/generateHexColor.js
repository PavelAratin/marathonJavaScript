import { randomNum } from "./randomNum";
import { hex } from "./constants";


export function generateHexColor() {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += hex[randomNum()]
  }
  return hexColor;
}