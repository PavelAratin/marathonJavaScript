export function createBody(title,text) {
  const body = document.createElement('div')
  body.classList.add('app-notes-body')
  body.innerHTML = `
    <div class="app-notes-body__header">
    <p id="note-title" class="app-notes-body__title">${title}</p>
    <input id="note-title-input" class="hidden" placeholder="${title}"/>
    <div class="app-notes-body__actions">
      <button class="app-notes-body__edit"><i class="fa-solid fa-pen-to-square"></i></button>
      <button class="app-notes-body__delete"><i class="fa-solid fa-trash"></i></button>
    </div>
    </div>
  <p id="note-text" class="app-notes-body__descriptions">${text}</p>
  <textarea id="note-title-textarea" class="hidden">${text}</textarea>
  `;
  const editBtn = body.querySelector('.app-notes-body__edit')
  const deleteBtn = body.querySelector('.app-notes-body__delete')
  const titleEl = body.querySelector('#note-title');
  const textEl = body.querySelector('#note-text');
  const titleInputEl = body.querySelector('#note-title-input')
  const textInputEl = body.querySelector('#note-title-textarea')

  editBtn.addEventListener('click',function(){
    titleEl.classList.toggle('hidden')
    textEl.classList.toggle('hidden')
    titleInputEl.classList.toggle('hidden')
    textInputEl.classList.toggle('hidden')
  })
  titleInputEl.addEventListener('input',function(e){
    titleEl.innerText = e.target.value;
  })
  textInputEl.addEventListener('input',function(e){
    textEl.innerText = e.target.value;
  })
  deleteBtn.addEventListener('click',function(){
    body.remove()
  })
  return body;
}