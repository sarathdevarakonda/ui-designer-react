const fs = require('fs');
const path = require('path');

const cities = {
  "sydney": false,
  "tokyo": false,
  "newyork": false,
  "paris": false,
  "london": false,
  "beijing": false,
  "cairo": false,
  "mumbai": false,
  "moscow": false,
  "toronto": false,
  "istanbul": false,
  "capetown": false,
  "mexicocity": false,
  "berlin": false,
  "bangkok": false,
  "buenos aires": false,
  "seoul": false,
  "nairobi": false,
  "losangeles": false,
  "dubai": false,
  "madrid": false,
  "rome": false,
  "jakarta": false,
  "vancouver": false,
  "athens": false,
  "stockholm": false,
  "prague": false,
  "warsaw": false,
  "barcelona": false,
  "amsterdam": false,
  "lima": false,
  "dublin": false,
  "vienna": false,
  "budapest": false,
  "zurich": false,
  "auckland": false,
  "brasilia": false,
  "copenhagen": false,
  "helsinki": false,
  "oslo": false,
  "riyadh": false,
  "santiago": false,
  "kiev": false,
  "manila": false,
  "bogota": false,
  "caracas": false,
  "warsaw": false,
  "islamabad": false,
  "oslo": false, // Note: Oslo is repeated in the original list, I kept it only once.
  "bucharest": false,
  "kualalumpur": false,
  "doha": false,
  // Add more cities as needed
};

console.log(cities);

const baseDirectory = '.';

if (!fs.existsSync(baseDirectory)) {
  fs.mkdirSync(baseDirectory);
}

const loadAndReplace = (city) => {
  const filePath = path.join(__dirname,  'cairo_weather.js');
  const content = fs.readFileSync(filePath, 'utf-8');
  const l = city.toLowerCase();

  let modifiedContent = content.replace(/cairo/g, city);
  modifiedContent = modifiedContent.replace(/id:\s*"weather"/g, `id: "${city}_weather"`);
  modifiedContent = modifiedContent.replace(/weather\/weatherLoaded/g, `weather/${city}`)
  modifiedContent = modifiedContent.replace(/weatherState/g, `${city}Weather`)

  const newFolderPath = path.join(__dirname, baseDirectory, `${l}_weather`);

  if (!fs.existsSync(newFolderPath)) {
    fs.mkdirSync(newFolderPath);
  }

  const newFilePath = path.join(newFolderPath, `index.js`);
  fs.writeFileSync(newFilePath, modifiedContent);

  console.log(`File saved for ${city}`);
};

Object.keys(cities).forEach(loadAndReplace);
