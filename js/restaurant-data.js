/**
 *
 * Gets restaurant data from 
 * Generates a random restaurant
 *
 */

const restaurantsData = [
  {
    name: "Perle",
    entfernung: "*",
    preis: "*",
    veggieTauglich: "***",
    Adresse: "Spitalerstraße 22, 20095 Hamburg",
    Kategorie: "Alles"
  },
  {
    name: "Europapassage",
    entfernung: "*",
    preis: "**",
    veggieTauglich: "***",
    Adresse: "Ballindamm 40 EG2, 20095 Hamburg",
    Kategorie: "Alles"
  },
  {
    name: "Max & Consorten",
    entfernung: "***",
    preis: "*",
    veggieTauglich: "**",
    Adresse: "Spadenteich 1, 20099 Hamburg",
    Kategorie: "Hausmannskost"
  },
  {
    name: "Luigi's",
    entfernung: "***",
    preis: "**",
    veggieTauglich: "***",
    Adresse: "Ditmar-Koel-Straße 21, 20459 Hamburg",
    Kategorie: "Pizza / Pasta"
  },
  {
    name: "Bella Italia",
    entfernung: "**",
    preis: "*",
    veggieTauglich: "**",
    Adresse: "Brandstwiete 58, 20457 Hamburg",
    Kategorie: "Pizza / Pasta"
  },
  {
    name: "Restaurant Kabul",
    entfernung: "***",
    preis: "*",
    veggieTauglich: "**",
    Adresse: "Steindamm 53, 20099 Hamburg",
    Kategorie: "Sonstiges"
  },
  {
    name: "Goot",
    entfernung: "**",
    preis: "***",
    veggieTauglich: "*",
    Adresse: "Depenau 10, 20095 Hamburg",
    Kategorie: "Hausmannskost"
  },
  {
    name: "O-ren Ishii",
    entfernung: "**",
    preis: "***",
    veggieTauglich: "***",
    Adresse: "Kleine Reichenstraße 18, 20457 Hamburg",
    Kategorie: "Asiatisch"
  },
  {
    name: "Better Burger Company",
    entfernung: "*",
    preis: "**",
    veggieTauglich: "***",
    Adresse: "Rosenstraße Ecke, Gertrudenkirchhof, 20095 Hamburg",
    Kategorie: "Burger"
  },
  {
    name: "Bucks Burgers",
    entfernung: "**",
    preis: "**",
    veggieTauglich: "***",
    Adresse: "Kurze Mühren 13, 20095 Hamburg",
    Kategorie: "Burger"
  },
  {
    name: "Mr. Cherng",
    entfernung: "**",
    preis: "***",
    veggieTauglich: "***",
    Adresse: "Speersort 1, 20095 Hamburg",
    Kategorie: "Asiatisch "
  },
  {
    name: "Franco Rathauspassage",
    entfernung: "**",
    preis: "**",
    veggieTauglich: "***",
    Adresse: "Rathausmarkt 7, 20095 Hamburg",
    Kategorie: "Pizza / Pasta"
  }
];

/**
 *  get data
 * */
function getData() {
  const data = restaurantsData.map(restaurant => {
    return restaurant
  })
  return data;
}
/**
 * build object
 * @param {
 * } callback
 */

function restaurantObj(callback, filters) {
  let data = getData()
  let restaurants = data;
  restaurants = restaurants.map((restaurant) => {
    return restaurant
  });
  //do something with object data
  callback(restaurants, filters);
}

export { restaurantObj };
