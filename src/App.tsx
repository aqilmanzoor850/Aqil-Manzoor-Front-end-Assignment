import AutoCompleteContainer from "./Container";
import "./App.css";
import useCountry from "./hooks/useCountryInput";

function App() {
  const {
    countryValue,
    handleCountryChange,
    filteredCountries,
    handleCountryPress,
    handleSubmit,
  } = useCountry();

  return (
    <AutoCompleteContainer
      countryValue={countryValue}
      handleCountryChange={handleCountryChange}
      filteredCountries={filteredCountries}
      handleCountryPress={handleCountryPress}
      handleSubmit={handleSubmit}
    />
  );
}

export default App;
