function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("myOverlay").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("myOverlay").style.width = "0";
}

// Функция для назначения обработчиков событий кликов
function addEventListeners() {
  // Назначаем обработчик для кнопки, открывающей меню
  document.getElementById("openbtn").addEventListener("click", openNav);

  // Назначаем обработчик для кнопки, закрывающей меню
  document.getElementById("closebtn").addEventListener("click", closeNav);

  // Назначаем обработчики для ссылок в меню
  document.getElementById("about").addEventListener("click", closeNav);
  document.getElementById("order").addEventListener("click", closeNav);
  document.getElementById("login").addEventListener("click", closeNav);
}

// Вызываем функцию при загрузке страницы
window.onload = addEventListeners;