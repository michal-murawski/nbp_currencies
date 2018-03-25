import { generateRandomNumber } from 'utils/dataHelpers';
import options from './api.options';

const apiUrl = 'http://api.nbp.pl/api/exchangerates/tables/a';
const localDevServer = 'http://localhost:7878/favourites';

async function getCurrencies() {
  try {
    const response = await fetch(apiUrl, options.get);
    return response.json();
  } catch (exception) {
    throw new Error('We could not download currencies!');
  }
}

async function getFavourites() {
  try {
    const response = await fetch(localDevServer, options.get);
    return response.json();
  } catch (exception) {
    throw new Error('We could not download favourites!');
  }
}

async function addFavourites(currency) {
  const body = JSON.stringify({
    id: generateRandomNumber(),
    code: currency,
  });

  try {
    const response = await fetch(localDevServer, options.post({ body }));
    return response.json();
  } catch (e) {
    throw new Error('We could not add favourite currency!', e);
  }
}

async function deleteFavourites(id) {
  try {
    const response = await fetch(`${localDevServer}/${id}`, options.delete);
    return response.json();
  } catch (e) {
    throw new Error('We could not delete currency!');
  }
}

export default {
  currencies: {
    getCurrencies,
  },
  favourites: {
    getFavourites,
    addFavourites,
    deleteFavourites,
  },
};
