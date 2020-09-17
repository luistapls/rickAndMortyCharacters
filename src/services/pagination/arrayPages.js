const arrayPages = async () => {
  const fetchCharacters = await fetch(
    'https://rickandmortyapi.com/api/character',
  );
  const fetchCharactersJson = await fetchCharacters.json();
  const countPagesCharacters = fetchCharactersJson.info.pages;

  const arrayNumberPages = Array.from(
    Array(countPagesCharacters),
    (_, i) => i + 1,
  );

  return arrayNumberPages;
};

export default arrayPages;
