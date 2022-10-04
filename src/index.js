import "@babel/polyfill";//импортируем полифилы
import './index.html';//импорт для слежения за html
import './index.scss';
import { button } from "./modules/constans";
import { fetchHandler } from "./modules/fetchHandler";


window.addEventListener('DOMContentLoaded', function () {
  button.addEventListener('click', function () {
    fetchHandler()
  })
})
