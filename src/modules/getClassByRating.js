export function getClassByRating(rating){
  if(rating <= 5){
    return 'red'
  }
  if(rating >=5 && rating <= 8){
    return 'orange'
  }
  if(rating >= 8 && rating <= 10){
    return 'green'
  }
}