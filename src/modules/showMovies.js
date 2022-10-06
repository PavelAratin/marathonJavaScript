import { appPoint } from "./constans"
import { getClassByRating } from "./getClassByRating";
import { showModal } from "./modal";

export function showMovies(data) {
  appPoint.innerHTML = '';
  data.films.forEach(function (_, index) {
    let newArr = data.films[index].genres.map(genre => `${genre.genre}`)
    appPoint.innerHTML += `
    <div class="movie" data-id="${data.films[index].filmId}">
          <div class="movie__imgbox">
            <img src="${data.films[index].posterUrl}" alt="Film">
            <a href="#" class="movie__link"></a>
          </div>
          <h2 class="movie__title">${data.films[index].nameRu}</h2>
          <div class="movie__genries">${newArr.join(', ')}</div>
          <div class="movie__rating movie__rating--${getClassByRating(data.films[index].rating)}">${data.films[index].rating}</div>
        </div>
    `;
  })
  const movies = document.querySelectorAll('.movie');
  movies.forEach(function(move){
    move.addEventListener('click',function(){
      showModal(Number(move.dataset.id));
    })
  })
}