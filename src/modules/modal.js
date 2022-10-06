import { API_URL_MOVIE_DETAILS, modal } from "./constans";
import { API_KEY as apiKey } from "./constans";


export async function showModal(id) {
  console.log(id)
  const resp = await fetch(API_URL_MOVIE_DETAILS + id, {
    headers: {
      "content-Type": "application/json",
      "X-API-KEY": apiKey,
    }
  })
  const constRespData = await resp.json()
  console.log(constRespData)
  modal.classList.add('modal--show');
  document.body.classList.add('stop-scrolling')
  modal.innerHTML = `
    <div class="modal__card">
      <img class="modal__movie-backdrop" src="${constRespData.posterUrl}" alt="">
      <h2>
        <span class="modal__movie-title">${constRespData.nameRu}</span>
        <span class="modal__movie-release-year"> - ${constRespData.startYear}</span>
      </h2>
      <ul class="modal__movie-info">
        <div class="loader"></div>
        <li class="modal__movie-genre">Жанр: ${constRespData.genres.map((el)=>`<span>${el.genre}</span>`).join(', ')}</li>
        <li class="modal__movie-runtime">Время: ${constRespData.filmLength ? constRespData.filmLength : '-'} минут</li>
        <li >Сайт: <a class="modal__movie-site" href="${constRespData.webUrl}">${constRespData.webUrl ? 'Перейти на сайт фильма' : '-'}</a></li>
        <li class="modal__movie-overview">${constRespData.description}</li>
      </ul>
      <button type="button" class="modal__button-close">Закрыть</button>
    </div>
  `;
  document.querySelector('.modal__button-close').addEventListener('click', function () {
    modal.classList.remove('modal--show');
    document.body.classList.remove('stop-scrolling')
  })
  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.classList.remove('modal--show');
      document.body.classList.remove('stop-scrolling')
    }
  })
  window.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
      modal.classList.remove('modal--show');
      document.body.classList.remove('stop-scrolling')
    }
  })
}