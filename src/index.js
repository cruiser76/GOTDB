import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import GotService from './services/gotService.js'
import {Provider} from 'react-redux';
import reducer from './reducer/reducer.js';
 
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
// import GotService          from './services/gotService.js';

const store = createStore(reducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument(new GotService())),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

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