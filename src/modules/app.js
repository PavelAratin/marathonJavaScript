import { createBody } from "./body";
import { appPoint, appWrapper } from "./constans";
import { createHeader } from "./header";

export function app() {
  appPoint.innerHTML = createHeader();
  const btnAdd = document.querySelector('.app-notes__button')
  btnAdd.addEventListener('click', function () {
    appWrapper.insertAdjacentElement('beforeend', createBody('Заголовок','Описание'))
  })
}