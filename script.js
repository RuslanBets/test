
function createHTML() {
  document.body.innerHTML = `
  <div class="wrapper">
  <div class="help-menu">
    <div class="text-block">
      Привет&#128075; Напишите,если нужно<br> показать что тут у нас и где или по-<br>мочь с регистрацией&#128578;
    </div>
    <div class="line"></div>
    <form class="form" action="">
      <input class="input" type="text" placeholder="Написать в чат...">
    </form>
  </div>
  <div class="circle-animation"></div>
  <div class="icon">
    <div class="wrapper-img">
      <img class="img" src="./img/avatar.png" alt="manager">
    </div>
  </div>
  </div>
`
}

createHTML()

const menu = document.querySelector('.help-menu')

setTimeout(() => {
  menu.style.display = 'block'
  setTimeout(() => {
    menu.style.display = 'none'
  }, 20000)
}, 3000)

