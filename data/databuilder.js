const fs = require("fs");

let countries = fs.readFileSync("./countries.json");
countries = JSON.parse(countries);

let output = [];
countries.forEach((country) => {
  let newCountryLayout = {
    continent: country.region,
    iso2Name: country["alpha-2"],
    iso3Name: country["alpha-3"],
    name: country.name,
  };
  output = [...output, newCountryLayout];
});

output = JSON.stringify(output);
fs.writeFileSync("countriesReformatted", output);
