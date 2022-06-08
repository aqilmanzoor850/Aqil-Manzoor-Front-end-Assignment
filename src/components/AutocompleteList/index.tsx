import {
  AutoCompleteListContainer,
  AutoCompleteListing,
  SuggestionsText,
} from "./styles";

interface autoCompleteListConfig {
  filteredCountries?: Array<string>;
  handleCountryPress?: (country: string) => void
}
const AutoCompleteList = ({ filteredCountries, handleCountryPress=() => {} }: autoCompleteListConfig) => {
  return (
    <AutoCompleteListContainer>
      {filteredCountries?.map((country) => (
        <AutoCompleteListing onClick={() => handleCountryPress(country)}>
          <SuggestionsText>{country}</SuggestionsText>
        </AutoCompleteListing>
      ))}
    </AutoCompleteListContainer>
  );
};

export default AutoCompleteList;
