import { useState, FormEvent } from "react";
import { Countries } from "../utils/countries";

const useCountry = () => {
  const [countryValue, setCountryValue] = useState<string>("");
  const [filteredCountries, setFilterdCountries] = useState<Array<string>>([]);

  const handleCountryChange = (event: FormEvent<HTMLInputElement>): void => {
    const filteredCountries = Countries.filter(
      (country) =>
        country.toLowerCase().indexOf(event.currentTarget.value.toLowerCase()) >
        -1
    );
    setCountryValue(event.currentTarget.value);
    setFilterdCountries(filteredCountries);
  };
  const handleCountryPress = (country: string = "") => {
    setCountryValue(country);
    setFilterdCountries([]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(countryValue);
    // Add functionality for form submission
  };

  return {
    countryValue,
    handleCountryChange,
    filteredCountries,
    handleCountryPress,
    handleSubmit,
  };
};

export default useCountry;
