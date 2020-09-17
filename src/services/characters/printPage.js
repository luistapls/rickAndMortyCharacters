const printPage = async (numberPage) => {
  const masterDiv = document.getElementById('masterDiv');

  // Procedemos a hacer un fetch buscando los datos de todos los personajes de esa pagina.
  const characterPage = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${numberPage}`,
  );
  const characterPageJson = await characterPage.json();
  const resultsCharacter = characterPageJson.results;

  // Luego que tenemos un array con todos los personajes de la página, procedemos a recorrer dicho array.
  resultsCharacter.forEach((character) => {
    // Cada personaje tendrá un div, el cual contendrá la imagen y el nombre del personaje.
    // El nombre será un vinculo, para que el usuario pueda ver la información del personaje con un click.
    const divCharacter = document.createElement('div');
    const imgCharacter = document.createElement('img');
    const aCharacter = document.createElement('a');

    // Asignando valores.
    divCharacter.className = 'item-character';
    imgCharacter.src = character.image;
    aCharacter.href = '#';
    aCharacter.textContent = character.name;
    aCharacter.id = character.id;

    // Introduciendo la imagen y el nombre del personaje en el respectivo div.
    divCharacter.appendChild(aCharacter);
    divCharacter.appendChild(imgCharacter);

    // Enviando el div del personaje al DOM.
    masterDiv.appendChild(divCharacter);
  });
};
export default printPage;
