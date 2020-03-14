import { useState } from "react";
import locales, { Country, Language } from "./locales";

const useCountries = () => {
  const countries = locales.countries;
  const languages = locales.languages;
  const [country, setCountry] = useState<Country>(countries[0]);
  const [language, setLanguage] = useState<Language>(languages[0]);

  return { countries, languages, country, setCountry, language, setLanguage };
};

export default useCountries;
