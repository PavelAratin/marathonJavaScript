import { form } from "./constans";
import { input } from "./constans";
import { API_URL_SEARCH } from "./constans";
import { getFetch } from "./getFetch";

export function formApply(){
  form.addEventListener("submit",function(e){
    e.preventDefault();
    const searchValue = `${API_URL_SEARCH}${input.value}`
    if(input.value){
      getFetch(searchValue)
      input.value = ''
    }
  })
}