import { useState, useEffect } from "react";

const useCountries = () => {
  const [countries, setCountries] = useState<string[]>([]);
  const [country, setCountry] = useState("Turkey");

  useEffect(() => {
    setCountries([
      "1",
      "2",
      "3",
      "4",
    ])
  }, []);

  return {countries, country, setCountry};
};

export default useCountries;