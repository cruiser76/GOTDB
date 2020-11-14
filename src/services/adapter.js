const getData = (data) => {
  return data || 'no data...';
};

const getID = (data) => {
  const idRegExp = /\/([0-9]*)$/;
  return data.url.match(idRegExp)[1];
}

export const transformChar = (char) => {
  return (
    {
      id: getID(char),
      name: getData(char.name),
      gender: getData(char.gender),
      born: getData(char.born),
      died: getData(char.died),
      culture: getData(char.culture),
    }
  );
};

export const transformHouse = (house) => {
  return (
    {
      id: getID(house),
      name: getData(house.name),
      region: getData(house.region),
      words: getData(house.words),
      titles: getData(house.titles),
      overlord: getData(house.overlord),
      ancestralWeapons: getData(house.ancestralWeapons),
    }
  );
};

export const transformBook = (book) => {
  return (
    {
      id: getID(book),
      name: getData(book.name),
      numberOfPages: getData(book.numberOfPages),
      publisher: getData(book.publisher),
      released: getData(book.released),
    }
  );
};
