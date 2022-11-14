let numberOfTries = 0;
function getRandomRestaurant(data, filters) {
  let length = Object.keys(data).length;
  const randomIndex = Math.floor(Math.random() * length);
  const restaurant = data[randomIndex];
  //check if random restaurant matches user selected filters
  let isMatched =
    (filters.kategorien.includes(restaurant.Kategorie) &&
      filters.entfernung.includes("Egal") &&
      restaurant.entfernung.includes("*" || "**" || "***")) ||
    (filters.entfernung.includes("Nicht so weit weg") &&
      restaurant.entfernung.includes("*" || "**")) ||
    (filters.entfernung.includes("Ganz nah dran") &&
      restaurant.entfernung.includes("*") &&
      filters.preis.includes("Egal") &&
      restaurant.preis.includes("*", "**", "***")) ||
    (filters.preis.includes("Nicht zu viel") &&
      restaurant.preis.includes("*", "**")) ||
    (filters.preis.includes("Ende des Monats") &&
      restaurant.preis.includes("*") &&
      filters.veggieTauglich.includes("Egal") &&
      restaurant.preis.includes("*", "**", "***")) ||
    (filters.veggieTauglich.includes("Sollte schon schmecken") &&
      restaurant.preis.includes("**", "***")) ||
    (filters.veggieTauglich.includes("Muss ganz lecker sein") &&
      restaurant.preis.includes("***"));
  if (isMatched) {
    printRandomRestaurant(restaurant);
    numberOfTries = 0; //reset numberOfTries
  } else {
    numberOfTries++; //increment numberOfTries
    if (numberOfTries < 100) {
      getRandomRestaurant(data, filters);
    } else {
      tryAgain();
      numberOfTries = 0; //reset numberOfTries
    }
  }
}

/**
 * @param {} str
 * @returns
 */
function htmlEncode(str) {
  return String(str).replace(/[^\w. ]/gi, function (c) {
    return "&#" + c.charCodeAt(0) + ";";
  });
}

/**
 * print random restaurant to dom
 * @param {
 * } restaurant
 */
function printRandomRestaurant(restaurant) {
  let name = htmlEncode(restaurant.name);
  let entfernung = htmlEncode(restaurant.entfernung);
  let kategorie = htmlEncode(restaurant.Kategorie);
  let preis = htmlEncode(restaurant.preis);
  let addresse = htmlEncode(restaurant.Adresse);
  let veggie = htmlEncode(restaurant.veggieTauglich);
  let element = document.querySelector("#random-restaurant");
  let newUl = document.createElement("ul");
  newUl.style.listStyleType === "none";
  let newLi = document.createElement("li");
  newLi.style.fontSize = "12px";
  newLi.style.color = "#006d72";
  let liContent = `<ul class="random-restaurant_details">
      <li>
          <b>${name}</b><br>Addresse: ${addresse}<br> <span class="material-symbols-outlined">local_pizza</span>${kategorie}<br>
          <span class="material-symbols-outlined">directions_car</span>${entfernung}<span class="material-symbols-outlined">euro_symbol</span> 
          ${preis}<span class="material-symbols-outlined">nest_eco_leaf</span>${veggie} </li></ul>`;
  element.appendChild(newUl);
  newUl.appendChild(newLi);
  newLi.innerHTML = liContent;
}

function tryAgain() {
  let element = document.querySelector("#random-restaurant");

  let restaurantContent = `
          <h2>Please try again...</h2>
          <p>There are no restaurants that match your criteria.</p>
        `;
  element.innerHTML = restaurantContent;

  let alert = document.querySelector(".message-alert");
  let alertContent = `
  <span class="select-more">Select more neighborhoods and/or cuisines.</span>
`;
  alert.innerHTML = alertContent;
}

export { getRandomRestaurant };
