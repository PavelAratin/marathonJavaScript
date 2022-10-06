
import { API_URL_POPULAR as url } from "./constans";
import { API_KEY as apiKey } from "./constans";
import { showMovies } from "./showMovies";

export async function getFetch(newUrl) {
  const resp = await fetch(newUrl ? newUrl : url, {
    headers: {
      "content-Type": "application/json",
      "X-API-KEY": apiKey,
    }
  })
  const constRespData = await resp.json()
  showMovies(constRespData)
}