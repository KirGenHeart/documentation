// Наборы слов
var adjectives = ["Умный", "Глупый", "Красивый", "Странный"];
var nouns = ["Карась", "Кот", "Пёс", "Бобёр"];

// Случайный выбор слов
var randomAdjective = (adjectives[Math.floor(Math.random() * adjectives.length)] + " ");
var randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

// Получение элементов
var adjectiveElement = document.getElementById('adjective');
var nounElement = document.getElementById('noun');
var iconElement = document.getElementById('icon');

// Заполнение блока rnd_text
adjectiveElement.textContent = randomAdjective;
nounElement.textContent = randomNoun;

// Определение пути к изображению в зависимости от выбранного существительного
var iconPath;
switch (randomNoun) {
  case "Карась":
    iconPath = "images/fish.svg";
    break;
  case "Кот":
    iconPath = "images/cat.svg";
    break;
  case "Пёс":
    iconPath = "images/dog.svg";
    break;
  case "Бобёр":
    iconPath = "images/beaver.svg";
    break;
  default:
    iconPath = "";
}

// Установка пути к изображению
iconElement.src = iconPath;
