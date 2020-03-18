const birthYearToNumber = ({ year, era }) => {
    return era === 'BBY' ? year * (-1) : year;
};

const parseBirthYearString = birthYear => {
    const year = birthYear.match(/[0-9]+/g)[0];
    const era = birthYear.match(/[A-Za-z]+/g)[0];
    return { year, era };
};

const isBirthYearRangeDefault = ({ min, max }) => {
    return !min.year && !max.year;
};

const isBirthYearInRange = (birthYear, { min, max }) => {
    const year = birthYearToNumber(parseBirthYearString(birthYear));
    const minYear = birthYearToNumber(min);
    const maxYear = birthYearToNumber(max);
    return year >= minYear && year <= maxYear;
};

const matchFilm = (films, selectedFilm) => {
    return !selectedFilm || films.includes(selectedFilm);
};

const matchSpecies = (species, selectedSpecies) => {
    return !selectedSpecies || species.includes(selectedSpecies);
};

const matchBirthYear = (birthYear, birthYearRange)  => {
    return isBirthYearRangeDefault(birthYearRange) || 
        (birthYear !== 'unknown' && isBirthYearInRange(birthYear, birthYearRange));
};

export { 
    matchFilm,
    matchSpecies,
    matchBirthYear
};