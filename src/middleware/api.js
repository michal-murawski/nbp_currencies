const apiUrl = 'http://api.nbp.pl/api/exchangerates/tables/a';


export default class {
  static async getCurrencies() {
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json'
      },
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error("Nie udalo sie sciagnac walut!");
    }

    return await response.json();
  }
}