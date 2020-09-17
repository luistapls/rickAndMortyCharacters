const infoCharacter = () => {
  // masterDiv es el div donde está el personaje que queremos leer.
  const masterDiv = document.getElementById('masterDiv');

  // Escuchamos el click, para saber a cual personaje del masterDiv ha clickeado el usuario.
  masterDiv.addEventListener('click', async (objetivoClick) => {
    // Validación para ver si el usuario le dió click al nombre del personaje.
    if (objetivoClick.target.localName === 'a') {
      // Borramos todo el contenido del masterDiv para que solamente quede la información del personaje consultado.
      masterDiv.textContent = '';

      // Mediante el idCharacter podemos hacer un fetch y conocer toda la información del personaje.
      const idCharacter = objetivoClick.target.id;
      const fetchCharacter = await fetch(
        `https://rickandmortyapi.com/api/character/${idCharacter}`,
      );
      const fetchCharacterJson = await fetchCharacter.json();

      // Creando los divs que van a contener toda la información del personaje.
      // Se hacen varios divs para poder trabajar con flexbox de forma más sencilla.
      const divCharacter = document.createElement('div');
      const divNameAndImgCharacter = document.createElement('div');
      const divOnlyInfoCharacter = document.createElement('div');

      // Estarán en divNameImgCharacter.
      const imgCharacter = document.createElement('img');
      const nameCharacter = document.createElement('p');

      // Estarán en divOnlyInfOCharacter.
      const episodesCharacter = document.createElement('p');
      const statusCharacter = document.createElement('p');
      const specieCharacter = document.createElement('p');
      const genderCharacter = document.createElement('p');
      const originCharacter = document.createElement('p');
      const lastLocationCharacter = document.createElement('p');

      // Asignandole una clase a divCharacter.
      // Para poder aplicarle flex a cada uno de sus hijos.
      divCharacter.className = 'contenedor-character';

      // Asignandole la imagen y nombre del personaje consultado.
      imgCharacter.src = fetchCharacterJson.image;
      nameCharacter.textContent = fetchCharacterJson.name;

      // Asignando la información del personaje consultado.
      episodesCharacter.textContent = `Episodes: ${
        fetchCharacterJson.episode.length + 1
      }`;
      statusCharacter.textContent = `Status: ${fetchCharacterJson.status}`;
      specieCharacter.textContent = `Specie: ${fetchCharacterJson.species}`;
      genderCharacter.textContent = `Gender: ${fetchCharacterJson.gender}`;
      originCharacter.textContent = `Origin: ${fetchCharacterJson.origin.name}`;
      lastLocationCharacter.textContent = `Last location: ${fetchCharacterJson.location.name}`;

      // Incluyendo el nombre y la imagen del personaje en su respectivo div.
      divNameAndImgCharacter.appendChild(nameCharacter);
      divNameAndImgCharacter.appendChild(imgCharacter);

      // Incluyendo la información del personaje en su respectivo div.
      divOnlyInfoCharacter.appendChild(episodesCharacter);
      divOnlyInfoCharacter.appendChild(statusCharacter);
      divOnlyInfoCharacter.appendChild(specieCharacter);
      divOnlyInfoCharacter.appendChild(genderCharacter);
      divOnlyInfoCharacter.appendChild(originCharacter);
      divOnlyInfoCharacter.appendChild(lastLocationCharacter);

      // Asignando los dos divs creados al div del personaje consultado.
      divCharacter.appendChild(divNameAndImgCharacter);
      divCharacter.appendChild(divOnlyInfoCharacter);

      // Enviando el div del personaje al DOM.
      masterDiv.appendChild(divCharacter);
    }
  });
};

export default infoCharacter;
