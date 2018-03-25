import { generateRandomNumber } from 'utils/dataHelpers';
import options from './api.options';

const apiUrl = 'http://api.nbp.pl/api/exchangerates/tables/a';
const wrongApiUrl = 'http://api.nbp.pl/api/exchangerates/tables/f';
const localDevServer = 'http://localhost:7878/favourites';

async function badRequestWithError() {
  const response = await fetch(wrongApiUrl, options.get);

  if (!response.ok) {
    throw new Error('We could not download currencies!');
  }

  return await response.json();
}

async function getCurrencies() {
  const response = await fetch(apiUrl, options.get);

  if (!response.ok) {
    throw new Error('We could not download currencies!');
  }

  return await response.json();
}

async function getFavourites() {
  const response = await fetch(localDevServer, options.get);

  if (!response.ok) {
    throw new Error('We could not download favourites!');
  }

  return await response.json();
}

async function addFavourites(currency) {
  const body = JSON.stringify({
    id: generateRandomNumber(),
    code: currency,
  });

  try {
    const response = await fetch(localDevServer, options.post({ body }));

    return await response.json();
  } catch (e) {
    throw new Error('We could add favourite currency!');
  }
}

async function deleteFavourites(id) {
  const response = await fetch(`${localDevServer}/${id}`, options.delete);

  if (!response.ok) {
    throw new Error('We could not delete currency!');
  }

  return await response.json();
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
