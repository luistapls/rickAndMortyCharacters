import arrayPages from './arrayPages';

const buttonPages = async () => {
  // Array con todas las páginas del API characters.
  const list = await arrayPages();

  // Array de las páginas de characters visibles en el navbar. Solo serán 5.
  let pageList = [];

  // Página actual. Cada página son 5 páginas de characters.
  let currentPage = 1;

  // Lás páginas que van a ser visibles en el navbar.
  const numberPerPage = 5;

  // Cantidad de páginas de páginas de characters.
  const numberOfPages = Math.ceil(list.length / numberPerPage);

  // Enviando al DOM 5 botones. Cada botón tiene un número de página de character.
  const drawList = () => {
    const listElement = document.getElementById('listElement');
    listElement.textContent = '';

    pageList.forEach((number) => {
      const liNumberPage = document.createElement('li');
      const aNumberPage = document.createElement('a');

      aNumberPage.className = 'page-link';
      liNumberPage.className = 'page-item';

      const numberPage = document.createTextNode(number);

      aNumberPage.appendChild(numberPage);
      liNumberPage.appendChild(aNumberPage);

      listElement.appendChild(liNumberPage);
    });
  };

  //  Creando la lista de las 5 páginas a mostrar en el navbar.
  const loadList = () => {
    const begin = (currentPage - 1) * numberPerPage;
    const end = begin + numberPerPage;

    pageList = list.slice(begin, end);

    drawList();
  };

  loadList(); // Iniciando loadList() para apenas entrar a la página ya se vea el navbar cargado mostrando las primeras 5 páginas de characters.

  // Según cual botón el usuario le de click, currentPage va a varíar.
  const buttonFirst = document.getElementById('buttonFirst');
  const buttonPrevious = document.getElementById('buttonPrevious');
  const buttonNext = document.getElementById('buttonNext');
  const buttonLast = document.getElementById('buttonLast');

  buttonFirst.addEventListener('click', () => {
    if (currentPage !== 1) {
      currentPage = 1;
      loadList();
    }
  });

  buttonPrevious.addEventListener('click', () => {
    if (currentPage !== 1) {
      currentPage -= 1;
      loadList();
    }
  });

  buttonNext.addEventListener('click', () => {
    if (currentPage !== numberOfPages) {
      currentPage += 1;
      loadList();
    }
  });

  buttonLast.addEventListener('click', () => {
    if (currentPage !== numberOfPages) {
      currentPage = numberOfPages;
      loadList();
    }
  });
};
export default buttonPages;
