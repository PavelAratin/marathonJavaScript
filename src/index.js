import "@babel/polyfill";//импортируем полифилы
import './index.html';//импорт для слежения за html
import './index.scss';
import { formApply } from "./modules/formApply";
import { getFetch } from "./modules/getFetch";


window.addEventListener('DOMContentLoaded', function () {
  getFetch();
  formApply();
})
