import { input } from "./constans";

export function copyPassword(){
  //три строчки взяты из инета нужно разобраться что они значат
  input.select()
  input.setSelectionRange(0,99999);
  navigator.clipboard.writeText(input.value)
}