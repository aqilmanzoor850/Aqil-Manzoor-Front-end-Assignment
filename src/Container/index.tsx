import { FormEvent } from 'react'
import AutoCompleteList from "../components/AutocompleteList";
import { Form, Container, TextInput, Button } from "./styles";

interface autoCompleteConfig {
  countryValue?: string;
  filteredCountries?: Array<string>;
  handleCountryChange?: (event: FormEvent<HTMLInputElement>) => void;
  handleCountryPress?: (country: string) => void;
  handleSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

const AutoCompleteContainer = ({
  countryValue,
  filteredCountries,
  handleCountryChange,
  handleCountryPress,
  handleSubmit
}: autoCompleteConfig) => {
  return (
    <Form onSubmit={handleSubmit} autoComplete="off" action="/action_page.php">
      <Container className="autocomplete" style={{ width: "300px" }}>
        <TextInput
          value={countryValue}
          onChange={handleCountryChange}
          id="myInput"
          type="text"
          name="myCountry"
          placeholder="Country"
        />
        {filteredCountries?.length ? (
          <AutoCompleteList
            filteredCountries={filteredCountries}
            handleCountryPress={handleCountryPress}
          />
        ) : null}
      </Container>
      <Button type="submit" />
    </Form>
  );
};

export default AutoCompleteContainer;
