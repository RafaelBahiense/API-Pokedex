# Project Backend
# Pokédex - Gotta catch them all
### A simple and lightweight pokédex, Typescript and TypeORM

<p align="center">
  <img src="https://github.com/RafaelBahiense/Pokedex/blob/main/assets/project.gif">
</p>

<p align="center">
   <a href="https://pokedex-nine-henna.vercel.app/">Click here</a> to acess the App
</p>

## About

This is an web application with which lots of people can track their Pokédex completion and Pokémons infos. Below are the implemented features:

- Sign Up
- Login
- List all pokémons
- Add Pokémon
- Remove Pokémon
- List my pokémons

[Project repo]


## Technologies


### The following tools and frameworks were used in the construction of the project:
|NodeJS|ExpressJS|TypeScript|TypeORM|
|-|-|-|-|
|[<p align="center"><img alt="Node" width="70px" src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" /></p>][node]|[<p align="center"><img alt="Express" width="120px" src="https://cdn.worldvectorlogo.com/logos/express-109.svg" /></p>][express]|[<p align="center"><img alt="Typescript" width="60px" src="https://static.cdnlogo.com/logos/t/96/typescript.svg" /></p>][typescript]|[<p align="center"><img alt="TypeOrm" width="110px" src="https://raw.githubusercontent.com/typeorm/typeorm/master/resources/logo_big.png" /></p>][typeorm]|
|Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine|Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications|TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions|TypeORM is an ORM that can run in NodeJS, Browser, Cordova, PhoneGap, Ionic, React Native, NativeScript, Expo, and Electron platforms and can be used with TypeScript and JavaScript (ES5, ES6, ES7, ES8)|


[html]: https://www.w3schools.com/html/
[css]: https://www.w3schools.com/css/
[es6]: https://262.ecma-international.org/6.0/
[react]: https://reactjs.org/
[node]: https://nodejs.org/en/
[express]: https://expressjs.com/
[typescript]: https://www.typescriptlang.org/
[typeorm]: https://typeorm.io/
[Project repo]: https://github.com/RafaelBahiense/Pokedex"


## How to run

1. Clone this repository
2. Clone the [Frontend repository]
3. Follow instructions [to run the Frontend]
4. Install dependencies
```bash
npm i
```
5. Create a PostgresSQL database "your_database_dev" and "your_database_test"
6. rename `example.local.dev.env` -> `local.dev.env` and `example.local.test.env` -> `local.test.env`
7. Config .env files as indicated
8. Run the Backend with
```bash
npm run dev
```
9. Finally access http://localhost:4000/api/"desired-route" on your favorite API Client 
or run the Frontend and access http://localhost:3000 on your favorite browser

[Frontend repository]: https://github.com/RafaelBahiense/Pokedex-Frontend
[to run the Frontend]: https://github.com/RafaelBahiense/Pokedex-Frontend#how-to-run
