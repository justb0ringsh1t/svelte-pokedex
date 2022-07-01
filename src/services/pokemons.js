export const getPokemons = async (page) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${15 * page}&limit=15$`;
  const response = await fetch(url);
  const data = await response.json();

  return data.results.map(({ name, url }) => {
    return { id: url.substring(34, url.length - 1), name };
  });
};
