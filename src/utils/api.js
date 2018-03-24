import{ generateRandomNumber } from 'utils/dataHelpers';
import options from './api.options';

const apiUrl = 'http://api.nbp.pl/api/exchangerates/tables/a';
const localDevServer = 'http://localhost:7878/favourites';


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

  const response = await fetch(localDevServer, options.post({ body }));

  if (!response.ok) {
    throw new Error('We could not download favourites!');
  }

  return await response.json();
}

async function deleteFavourites(id) {
  const response = await fetch(`${localDevServer}/${id}`, options.delete);

  if (!response.ok) {
    throw new Error('We could not delete favourites!');
  }

  return await response.json();
}

export default {
  currencies: {
    getCurrencies
  },
  favourites: {
    getFavourites,
    addFavourites,
    deleteFavourites,
  }
}