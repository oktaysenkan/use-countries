import locales from "countries-list";

export interface Country extends locales.Country {
  code: string;
}

export interface Language extends locales.Language {
  code: string;
}

const countries: Country[] = [];
const languages: Language[] = [];

Object.entries(locales.countries).forEach(element => {
  countries.push({
    code: element[0].toUpperCase(),
    ...element[1]
  });
});

Object.entries(locales.languagesAll).forEach(element => {
  languages.push({
    code: element[0].toUpperCase(),
    ...element[1]
  });
});

export default {
  countries,
  languages
};
