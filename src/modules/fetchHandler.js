import { image, url } from "./constans";
import { getRandomNum } from "./getRandomNum";

export async function fetchHandler(){
  try{
    const response = await fetch(url)
    const data = await response.json()
    image.src = data[getRandomNum(data.length)].url
  }catch(error){
    console.log(error)
  }
}