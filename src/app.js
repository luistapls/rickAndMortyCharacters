import buttonPages from './services/pagination/addButtonPages';
import printCharacters from './services/characters/printCharacters';
import infoCharacter from './services/oneCharacter/infoCharacter';
import printPage from './services/characters/printPage';

import './styles.css';

const app = async () => {
  // printPage hace que se vean los personajes de una página.
  // Se le pasa el valor "1" para apenas entrar al sitio web, se vea los personajes de la primera página.
  await printPage(1);

  // Esta función genera un navbar que permite navegar por cada página de la API.
  await buttonPages();

  // printCharacters imprime todos los personajes de la página que el usuarió clickeó en el navbar que generó la anterior función.
  printCharacters();

  // Cuando el usuario clickea el nombre del personaje, esta función permite ver toda la información de dicho personaje.
  infoCharacter();
};

app();
