import { items } from "./constans";
export function renderToHtml(values){
  items.forEach(function (item, index) {
    item.textContent = values[index]
  })
}