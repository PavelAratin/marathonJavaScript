import "@babel/polyfill";//импортируем полифилы
import './index.html';//импорт для слежения за html
import './index.scss';
import { main } from "./modules/app";


window.addEventListener('DOMContentLoaded',function(){
 main()
})
