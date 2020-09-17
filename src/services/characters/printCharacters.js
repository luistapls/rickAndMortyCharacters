import printPage from './printPage';

const printCharacters = () => {
  // btnPagination es el navbar donde están los números de paginas.
  const listElement = document.getElementById('listElement');

  // Escuchamos el click.
  // Así sabemos que página quiere consultar el usuario.
  listElement.addEventListener('click', async (button) => {
    // Nos aseguramos que en cada consulta de pagina se borren los anteriores personajes consultados.
    const masterDiv = document.getElementById('masterDiv');
    masterDiv.textContent = '';

    // Obtenemos el número de la pagina que el usuario le dió click.
    const numberPage = Number(button.target.textContent);

    // Enviamos al DOM todos los personajes de la página que el usuario consultó.
    await printPage(numberPage);
  });
};

export default printCharacters;
