const birthYearToNumber = birthYear => {
    const year = birthYear.match(/[0-9]+/g)[0];
    const era = birthYear.match(/[A-Za-z]+/g)[0];
    return era === 'BBY' ? year * (-1) : year;
}

const isBirthYearInRange = (birthYear, min, max) => {
    const year = birthYearToNumber(birthYear);
    const moreThenMin = min === 'any' || year >= min;
    const lessThenMax = max === 'any' || year <= max;
    return moreThenMin && lessThenMax;
}

const isBirthYearInDefaultRange = (min, max) => min === 'any' && max === 'any';

export { 
    birthYearToNumber, 
    isBirthYearInRange, 
    isBirthYearInDefaultRange 
};