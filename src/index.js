import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
// import GotService          from './services/gotService.js';

ReactDOM.render(<App />, document.getElementById('root'));

// const got = new GotService();

// got.getAllCharacters()
//   .then((res) => {
//     res.forEach((el) => console.log(el.name, el.gender));
//   });

// got.getCharacter(130)
//   .then((res) => console.log(res));

// got.getAllHouses()
//   .then((res) => console.log(res));

// got.getHouse(40)
//   .then((res) => console.log(res));

// got.getAllBooks()
//   .then((res) => console.log(res));

// got.getBook(5)
//   .then((res) => console.log(res));