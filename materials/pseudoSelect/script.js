// JavaScript код для обработки логики блока выбора аватара

// Получение элементов блока по их классам
var avatarHeader = document.querySelector(".avatar-header");
var avatarOptions = document.querySelector(".avatar-options");
var avatarSpan = document.querySelector(".avatar-header span");
var selectedAvatar = document.querySelector("#selected-avatar");
var avatarBlock = document.querySelector(".avatar-block");

// Функция для переключения состояния аккордиона (раскрыт или свернут)
function toggleAccordion() {
  // Если блок с вариантами выбора аватара скрыт, то раскрываем его
  if (avatarOptions.hidden) {
    // Устанавливаем максимальную высоту блока равной высоте его содержимого
    avatarOptions.style.maxHeight = avatarOptions.scrollHeight + "px";
    // Делаем блок видимым
    avatarOptions.hidden = false;
    // Показываем скролл
    avatarBlock.style.overflowY = "auto";
  } else {
    // Иначе сворачиваем его
    // Устанавливаем максимальную высоту блока равной нулю
    avatarOptions.style.maxHeight = 0;
    // Делаем блок невидимым
    avatarOptions.hidden = true;
    // Скрываем скролл
    avatarBlock.style.overflowY = "hidden";
    // Прокрутка к верху при нажатии на кнопку "Наверх"
    avatarBlock.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

// Функция для выбора аватарки из списка
function selectAvatar(avatar) {
  // Получаем ссылку на изображение аватарки
  var avatarSrc = avatar.src;
  // Получаем альтернативный текст аватарки
  var avatarAlt = avatar.alt;
  // Устанавливаем выбранную аватарку в блоке с надписью или выбранной аватаркой
  selectedAvatar.src = avatarSrc;
  selectedAvatar.alt = avatarAlt;
  // Скрываем надпись "Выберите аватар"
  avatarSpan.hidden = true;
  // Показываем выбранную аватарку
  selectedAvatar.hidden = false;
  // Сворачиваем блок с вариантами выбора аватара
  toggleAccordion();
}
