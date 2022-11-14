/**
 *
 * Filters random restaurant out put from user entry
 *
 */

/**
 *
 * Declare & assign form and input variables
 *
 * */
const form = document.querySelector("#restaurant-filter_form");
const formBtn = form.querySelector(".random-restaurant_btn");
const checkboxes = document.querySelectorAll(
  ".filters_fieldset input[type='checkbox']:not(#all)"
);
const selectAll = document.querySelectorAll(
  ".filters_fieldset input[id='all']"
);

/**
 *
 * builds an array of selected filters
 *
 * @param {*} e
 * @param {*} checkboxes
 */
function getFilters(checkboxes) {
  let filtersArray = selectedFilters(checkboxes);
  return filtersArray;
}

/**
 *
 * selectedFilters function returns object containing selected neighborhood and cuisine filters
 * @param {
 * } inputs
 * @returns
 */
function selectedFilters(checkboxes) {
  const kategorien = [];
  const entfernung = [];
  const preis = [];
  const veggieTauglich = [];
  checkboxes.forEach((input) => {
    if (input.checked === true) {
      if (input.classList.contains("Kategorien")) {
        kategorien.push(input.name);
      } else if (input.classList.contains("Entfernung")) {
        entfernung.push(input.name);
      } else if (input.classList.contains("Preis")) {
        preis.push(input.name);
      } else if (input.classList.contains("Veggietaug")) {
        veggieTauglich.push(input.name);
      }
    }
  });

  return { kategorien, entfernung, preis, veggieTauglich };
}

/**-----------------------------------------------
 *
 * Event listner on "Select All" checkbox changes
 *
 */
selectAll.forEach((all) => {
  all.addEventListener("change", function (e) {
    selectAllToggle(all, checkboxes);
  });
});

/**
 * selectAllToggle function called on "select all" checkbox change
 * if "Select All" is checked/unchecked, all other checkboxes will be checked/unchecked
 * @param {*} all
 * @param {*} checkboxes
 */
function selectAllToggle(all, checkboxes) {
  let classList = all.classList;
  checkboxes.forEach((checkbox) => {
    if (checkbox.classList.contains(classList)) {
      checkbox.checked = all.checked;
    }
  });
}

/**-----------------------------------------------
 *
 * Event listner on checkbox changes (excluding "Select All")
 *
 */
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", function (e) {
    clearSelectAll(checkbox, selectAll);
  });
});

/**
 * clearSelectAll function called on checkbox change
 * clears check from the "Select All" checkbox if other item is checked in list
 * @param {*} checkbox
 * @param {*} selectAll
 */
function clearSelectAll(checkbox, selectAll) {
  let classList = checkbox.classList;
  selectAll.forEach((allCheckbox) => {
    if (!checkbox.checked && allCheckbox.classList.contains(classList)) {
      allCheckbox.checked = checkbox.checked;
    }
  });
}
function uncheckElements() {
  e.preventDefault();
  var uncheck = document.getElementsByTagName("input");
  for (var i = 0; i < uncheck.length; i++) {
    if (uncheck[i].type == "checkbox") {
      uncheck[i].checked = false;
    }
  }
}

/**
 *
 *  Prints alert to make a selection of no filters are selected.
 *
 */

function requireSelection(filtersArray) {
  let messageDiv = form.querySelector(".message-alert");
  if (
    filtersArray.kategorien.length === 0 &&
    filtersArray.entfernung.length === 0 &&
    filtersArray.preis.length === 0 &&
    filtersArray.veggieTauglich.length === 0
  ) {
    let message = `<span class="require-all"> Bitte Kategorien, Entfernung, Preis und Veggitauglich auswählen </span>`;
    messageDiv.innerHTML = message;
    return false;
  } else if (filtersArray.kategorien.length === 0) {
    let message = `<span class="require-kategorie"> Bitte Kategorien auswählen </span>`;
    messageDiv.innerHTML = message;
    return false;
  } else if (filtersArray.entfernung.length === 0) {
    let message = `<span class="require-entfernung"> Bitte Entfernung auswählen </span>`;
    messageDiv.innerHTML = message;
    return false;
  } else if (filtersArray.preis.length === 0) {
    let message = `<span class="require-preis"> Bitte Preis auswählen </span>`;
    messageDiv.innerHTML = message;
    return false;
  } else if (filtersArray.veggieTauglich.length === 0) {
    let message = `<span class="require-veggietauglich">Bitte Veggitauglich auswählen </span>`;
    messageDiv.innerHTML = message;
    return false;
  } else {
    let message = "";
    messageDiv.innerHTML = message;
    return true;
  }
}

export { formBtn, checkboxes, getFilters, requireSelection,uncheckElements };
