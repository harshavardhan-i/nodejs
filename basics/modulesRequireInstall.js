// In order to use modules/libraries/packages we need to 'require' it.

// fs - Node inbuilt module for file system.
const fs = require("fs");
// Copy file.
fs.copyFileSync("introBasics.js", "tempIntro.js");

// Modules can be Internal or external.
// NPM: Node package manager - handles external packages.
// NPM is bundeled along with node, installing node will install NPM.
// NPM packages are reusable code.
// npm init: initializes and creates package.json
// package.json - description of npm packages within project, dependencies etc.
// fileName.json - JSON file format 

// External package:
// Look for packages in npmjs.org, install using npm and read docs to use.
var superHeroes  = require("superheroes");
var superHeroName = superHeroes.random();
console.log(superHeroName);
let superVillains = require("superVillains");
console.log(superVillains.random());