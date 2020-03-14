import { useState } from "react";
import locales, { Country, Language } from "./locales";

const useCountries = () => {
  const countries = locales.countries;
  const languages = locales.languages;
  const [country, setCountry] = useState<Country>(locales.countries[0]);
  const [language, setLanguage] = useState<Language>(locales.languages[0]);

  return { countries, languages, country, setCountry, language, setLanguage };
};

export default useCountries;
