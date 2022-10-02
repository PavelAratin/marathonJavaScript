import { hex } from "./constants";

export function randomNum() {
  return Math.floor(Math.random() * hex.length)
}
