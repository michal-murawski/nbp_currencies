import{ generateRandomNumber } from 'utils/dataHelpers';

const apiUrl = 'http://api.nbp.pl/api/exchangerates/tables/a';
const localDevServer = 'http://localhost:8080/favourites';

async function getCurrencies() {
  const response = await fetch(apiUrl, {
    headers: {
      'Accept': 'application/json'
    },
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('We could not download currencies!');
  }

  return await response.json();
}

async function getFavourites() {
  const response = await fetch(localDevServer, {
    method: 'GET',
  });

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

  const response = await fetch(localDevServer, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body
  });

  if (!response.ok) {
    throw new Error('We could not download favourites!');
  }

  return await response.json();
}

async function deleteFavourites(id) {
  const response = await fetch(`${localDevServer}/${id}`, {
    method: 'DELETE',
  });

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