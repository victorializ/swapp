const isDataLoaded = (data, loading, error) => {
    return data.length && !loading && !error;
};

const getFilmTitleFunc = films => url => {
    const { title } = films.find(value => value.url === url);
    return title;
};

const getSpeciesNameFunc = species => url => {
    const { name } = species.find(value => value.url === url);
    return name;
};

const formatCharacters = (characters, films, species) => {
    const getFilmTitle = getFilmTitleFunc(films);
    const getSpeciesName = getSpeciesNameFunc(species);

    const formatedCharacters = characters.map(value => {
        const { name, birth_year, 
          species: speciesUrls, 
          films: filmsUrls } = value;
          const filmsTitles = filmsUrls?.map(getFilmTitle);
          const speciesNames = speciesUrls?.map(getSpeciesName);
          return {
            name, 
            birthYear: birth_year,
            species: speciesNames,
            films: filmsTitles
          };
      });

    return formatedCharacters;
};

export {
    isDataLoaded,
    formatCharacters
};