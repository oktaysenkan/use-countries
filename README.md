# useCountries

You can list `countries` and `languages`

## Installing

```
npm i use-countries --save
```

```
yarn add use-countries
```

## Usage

```jsx
import useCountries from "use-countries";
const {
  countries,
  languages,
  country,
  setCountry,
  language,
  setLanguage
} = useCountries();
```

```js
<select onChange={languagesOnChanged}>
  {countries.map(item => (
    <option value={item.code}>{item.name}</option>
  ))}
</select>
```

### Country

```json
{
  "code": "AD",
  "name": "Andorra",
  "native": "Andorra",
  "phone": "376",
  "continent": "EU",
  "capital": "Andorra la Vella",
  "currency": "EUR",
  "languages": ["ca"],
  "emoji": "🇦🇩",
  "emojiU": "U+1F1E6 U+1F1E9"
}
```

### Language

```json
{ "code": "AA", "name": "Afar", "native": "Afar" }
```
