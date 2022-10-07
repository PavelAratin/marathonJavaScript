export function generatePassword() {
  const passwordLenght = 10;
  const numberChars = "0123456789";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const symbolChars = "!@#$%^&*()_+";
  const allChars = numberChars + upperChars + lowerChars + symbolChars;
  let randomString = ''
  for (let i = 0; i < passwordLenght; i++){
    let randomNumber = Math.floor((Math.random()* allChars.length))
    randomString += allChars[randomNumber]
  }
  return randomString;

}