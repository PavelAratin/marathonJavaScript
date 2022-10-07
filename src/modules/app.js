import { btns, input } from "./constans";
import { copyPassword } from "./copyPassword";
import { generatePassword } from "./generatePassword";

export function app() {
  btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      if (e.target.classList.contains('password-generator__btn--generate')) {
        input.classList.remove('password-generator__input--empty');
        input.value = generatePassword();
      }
      if(input.value && e.target.classList.contains('password-generator__btn--copy')){
        copyPassword()
      }
      if(!input.value && e.target.classList.contains('password-generator__btn--copy')){
        input.classList.add('password-generator__input--empty');
        input.value = 'Сгенерируйте пароль'
      }
    })
  })
}