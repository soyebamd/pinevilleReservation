let testMode = "on"; // "on" or "off"
const publicKeyTest = "pk_test_uuyYd5IBRrwwxZwQODrOKXNP00Yg1G9X7t";
const publicKeyLive = "pk_live_DZ3iuEkfi0crkfodvUT9t1J500u58eDiQL";

let stripe = testMode === "on" ? Stripe(publicKeyTest) : Stripe(publicKeyLive);

console.log("Stripe mode: " + (testMode === "on" ? "Test" : "Live"));

// Create Elements
let createElement = false;

const cartButton = document.querySelector("#addtocart");

const gettingInfo = document.querySelector("#getting-info");

let createCartTitle = document.createElement("h2");
let createRoomItemTitle = document.createElement("p");
let createEventDate = document.createElement("p");
let createEventTitle = document.createElement("p");
let createHowManyGuest = document.createElement("p");
let createDepositedPrice = document.createElement("p");
let createTotalCost = document.createElement("p");

let createMenuItemsTitle = document.createElement("h4");

let createFirstMenuWrappper = document.createElement("ul");

let createMainMenuWrappper = document.createElement("ul");

let createMenuTitle = document.createElement("p");

let createFirstCourseTitle = document.createElement("p");

let createMainCourseTitle = document.createElement("p");
let createFirstMenu;
let createMainMenu;
let selected;

let createBarOptionTitle = document.createElement("p");

let createBarOptionPrice = document.createElement("input");

let createDesertMenuOption = document.createElement("p");

let createDesertMenuWrapper = document.createElement("div");

let selectedDesertOptionsWrap;

selectedDesertOptionsWrap = document.createElement("p");

//Amount

// const createTotalCost;

// Stripe Elements
let elements = stripe.elements();
let card = elements.create("card");
// let field_name;
let customer_name = "Soyeb Ahmed";
// let customer_email;
// let customer_Phone;
// let ticket_cost;
// let amount;
let stripe_amount = "2000";

const form = document.getElementById("payment-form");
//
//
//

function paymentForm() {
  // Create the card element
  const cardElementLabel = document.createElement("label");
  cardElementLabel.setAttribute("for", "card-element");
  cardElementLabel.textContent = "Credit or debit card";

  const cardElementDiv = document.createElement("div");
  cardElementDiv.setAttribute("id", "card-element");

  const cardErrorsDiv = document.createElement("div");
  cardErrorsDiv.setAttribute("id", "card-errors");
  cardErrorsDiv.setAttribute("role", "alert");

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("id", "submit-button");
  submitButton.setAttribute("class", "btn btn-primary mb-2");
  submitButton.textContent = "Checkout";

  const paymentForm = document.getElementById("payment-form");

  paymentForm.appendChild(cardElementLabel);
  paymentForm.appendChild(cardElementDiv);
  paymentForm.appendChild(cardErrorsDiv);

  paymentForm.appendChild(submitButton);

  card = stripe.elements().create("card", {
    style: {
      base: {
        iconColor: "#cc8e1f",
        color: "#cc8e1f",
        fontWeight: "500",
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "#cc8e1f78",
        },
        "::placeholder": {
          color: "#cc8e1f78",
        },
      },
      invalid: {
        iconColor: "red",
        color: "#ff0000",
      },
    },
  });

  card.mount("#card-element");

  afterGettingInfo();
}

//
//
//
//
//

// ready for checkout
function afterGettingInfo() {
  // console.log(form);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    createToken();
  });
}
// create stripe tocken
function createToken() {
  stripe.createToken(card).then(function (result) {
    if (result.error) {
      let errorElement = document.getElementById("card-errors");
      errorElement.textContent = result.error.message;
    } else {
      permission = true;
      stripeTokenHandler(result.token);
    }
  });
}

function formData(fieldName, fieldValue) {
  let inputField = document.createElement("input");
  inputField.setAttribute("type", "hidden");
  inputField.setAttribute("name", fieldName);
  inputField.setAttribute("value", fieldValue);
  form.appendChild(inputField);
}

function stripeTokenHandler(token) {
  let hiddenTokenInput = document.createElement("input");
  hiddenTokenInput.setAttribute("type", "hidden");
  hiddenTokenInput.setAttribute("name", "stripeToken");
  hiddenTokenInput.setAttribute("value", token.id);
  form.appendChild(hiddenTokenInput);

  formData("customer_name", customer_name);

  formData("selected_barName", barOptionSelectedName);

  console.log(barOptionSelectedName);

  console.log(customer_name);

  // const buyButton = document.getElementById("submit-button");
  // buyButton.remove();
  // showDetails.appendChild(loadingElement);
  // form.style.opacity = ".6";
  // form.style.filter = "blur(4px)";

  //form.submit();
}

function cartDetails(e) {
  // prevent default
  e.preventDefault();

  // reset the form

  console.log("works");

  let peopleCakeFees = cakeFees * Number(elementPeopleCount.value);

  let totalCost =
    Number(roomRental) +
    Number(packageCategoryPrice) +
    Number(barOptionSelectedPrice) +
    Number(peopleCakeFees);

  createElement = true;

  if (createElement) {
    const roomItems = document.querySelector(".room-items.active");
    const roomItemsValue = roomItems.textContent;

    createCartTitle.className = "mt-0";
    createCartTitle.innerHTML = `<strong>Your Cart Details</strong>`;
    gettingInfo.appendChild(createCartTitle);

    createRoomItemTitle.className = "";
    createRoomItemTitle.innerHTML = `<strong>Selected Room: </strong> ${roomItemsValue}`;
    gettingInfo.appendChild(createRoomItemTitle);

    createEventDate.className = "";
    createEventDate.innerHTML = `<strong>Selected Date: </strong> ${getFullDate}`;
    gettingInfo.appendChild(createEventDate);

    createEventTitle.className = "";
    createEventTitle.innerHTML = `<strong>What is the Occasion? : </strong> ${selectEvents.value}`;
    gettingInfo.appendChild(createEventTitle);

    createHowManyGuest.className = "";
    createHowManyGuest.innerHTML = `<strong>How Many Guests? : </strong> ${elementPeopleCount.value} People`;
    gettingInfo.appendChild(createHowManyGuest);

    createDepositedPrice.className = "";
    createDepositedPrice.innerHTML = `<strong>Deposited Price : </strong> $${depositeAmount} People`;
    gettingInfo.appendChild(createDepositedPrice);

    createTotalCost.className = "";
    createTotalCost.innerHTML = `<strong>Total Cost : </strong> $${totalCost}`;
    gettingInfo.appendChild(createTotalCost);

    createMenuItemsTitle.className = "";
    createMenuItemsTitle.innerHTML = `<strong>Selected Dinner? : </strong> ${currentMenu.toUpperCase()}`;
    gettingInfo.appendChild(createMenuItemsTitle);

    createMenuTitle.className = "";
    createMenuTitle.innerHTML = `<strong>Menu : </strong> ${packageTitle.textContent}`;
    gettingInfo.appendChild(createMenuTitle);

    gettingInfo.appendChild(createFirstMenuWrappper);
    gettingInfo.appendChild(createMainMenuWrappper);

    // Reset existing lists
    createFirstMenuWrappper.innerHTML = "";
    createMainMenuWrappper.innerHTML = "";

    createFirstCourseTitle.className = "";
    createFirstCourseTitle.innerHTML = `<strong>First Course : </strong> ${packageMenutitle_firstCourse}`;
    createFirstMenuWrappper.appendChild(createFirstCourseTitle);

    firstCourseSelectedItems.forEach((firstMenu) => {
      createFirstMenu = document.createElement("li");
      createFirstMenu.textContent = firstMenu;
      createFirstMenuWrappper.appendChild(createFirstMenu);
    });

    createMainCourseTitle.className = "";
    createMainCourseTitle.innerHTML = `<strong>Main Course : </strong> ${packageMenutitle_mainCourse}`;
    createMainMenuWrappper.appendChild(createMainCourseTitle);

    mainCourseSelectedItems.forEach((secondMenu) => {
      createMainMenu = document.createElement("li");
      createMainMenu.textContent = secondMenu;
      createMainMenuWrappper.appendChild(createMainMenu);
    });

    // bar options

    createBarOptionTitle.className = "";
    createBarOptionTitle.innerHTML = `<strong>Bar Packages's Package? : </strong> ${barOptionSelectedName}`;
    gettingInfo.appendChild(createBarOptionTitle);

    createBarOptionPrice.type = "hidden";
    createBarOptionPrice.setAttribute("name", "createBarOptionPrice");
    createBarOptionPrice.value = `${barOptionSelectedPrice}`;
    gettingInfo.appendChild(createBarOptionPrice);

    createDesertMenuOption.className = "";
    createDesertMenuOption.innerHTML = `<strong>Dessert Menu? : </strong> ${selectedDesertOptions}`;
    gettingInfo.appendChild(createDesertMenuOption);

    // Clear existing content before adding new content
    createDesertMenuWrapper.innerHTML = "";

    // Add selected dessert options
    getDesertChoice.forEach((selectedDesertOption) => {
      const optionElement = document.createElement("p");
      optionElement.textContent = selectedDesertOption;
      createDesertMenuWrapper.appendChild(optionElement);
    });

    gettingInfo.appendChild(createDesertMenuWrapper);
  }

  paymentForm();

  createElement = false;
}

const cartForm = document.querySelector("#cart-form");

cartForm.addEventListener("submit", cartDetails);
