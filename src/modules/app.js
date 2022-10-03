import { getDataTime } from "./getDataTime";
import { renderToHtml } from "./renderToHtml";

export function getCountdownTime() {
  //текущее время
  const now = new Date().getTime()
  //разница во времени
  const distance = getDataTime() - now;

  //получаем милисекунды
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // подсчет дней, секунд,минут
  let days = Math.floor(distance / oneDay)
  let hours = Math.floor((distance % oneDay) / oneHour)
  let minutes = Math.floor((distance % oneHour) / oneMinute)
  let seconds = Math.floor((distance % oneHour) / 1000)
  //создаем массив с переменными
  const values = [days, hours, minutes, seconds]
  //выводим значения на страницу
  renderToHtml(values)
  return distance
}