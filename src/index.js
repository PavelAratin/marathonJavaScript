import "@babel/polyfill";//импортируем полифилы
import './index.html';//импорт для слежения за html
import './index.scss';
import { getCountdownTime } from "./modules/app";


window.addEventListener('DOMContentLoaded',function(){
  getCountdownTime()
  let interval = setInterval(getCountdownTime,1000)
  if(getCountdownTime() < 0){
    clearInterval(interval)
  }
})
