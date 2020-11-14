import {transformChar, transformBook, transformHouse} from './adapter.js';

class GotService {
  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api/';
  }

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }

  getAllCharacters = async () => {
    const res = await this.getResource('characters?page=5&pageSize=10');
    return res.map(transformChar);
  }

  getCharacter = async (id) => {
    const res = await this.getResource(`characters/${id}`);
    return transformChar(res);
  }

  getAllHouses = async () => {
    const res = await this.getResource('houses?pageSize=10');
    return res.map(transformHouse);
  }

  getHouse = async (id) => {
    const res = await this.getResource(`houses/${id}`);
    return transformHouse(res);
  }

  getAllBooks = async () => {
    const res = await this.getResource('books?pageSize=10');
    return res.map(transformBook)
  }

  getBook = async (id) => {
    const res = await this.getResource(`books/${id}`);
    return transformBook(res);
  }
}

export default GotService;
