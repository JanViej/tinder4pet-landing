import values from 'lodash/values';
import groupBy from 'lodash/groupBy';

import countries from './countries.json';
import cities from './world-cities_json.json';

export const COUNTRIES = values(countries.countries);

export const CITIES = groupBy(cities, 'country');

export const CITIES_ALL = cities;


// const citiesGroup = _.groupBy(cities, 'country');

// const cityResult = {};

// Object.keys(citiesGroup).forEach( (key) => {
//     const country = _.find(COUNTRIES, {name: key});
//     if (country && country.code) {
//         cityResult[country.code] = citiesGroup[key];
//     }
// });

// export const CITIES = cityResult

