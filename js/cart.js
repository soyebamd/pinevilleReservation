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
let createEventDay = document.createElement("p");
let createEventTitle = document.createElement("p");
let createHowManyGuest = document.createElement("p");
let createDepositedPrice = document.createElement("p");
let createTotalCost = document.createElement("p");

let logo = document.createElement("img");

let createMenuItemsTitle = document.createElement("h4");

let createFirstMenuWrappper = document.createElement("ul");

let createMainMenuWrappper = document.createElement("ul");

let createMenuTitle = document.createElement("p");

let createFirstCourseTitle = document.createElement("p");

let createMainCourseTitle = document.createElement("p");
let createFirstMenu;
let createMainMenu;
let selected;

let stripe_amount;

let createBarOptionTitle = document.createElement("p");

let createBarOptionPrice = document.createElement("input");

let createDesertMenuOption = document.createElement("p");

let optionElement = document.createElement("p");

let createDesertMenuWrapper = document.createElement("div");

let createName;
let createEmail;
let createPhone;
let package_with_people;

let totalCost;
let peopleCakeFees;

let selectedDesertOptionsWrap;

selectedDesertOptionsWrap = document.createElement("p");

let roomItems = document.querySelector(".room-items.active");

//Amount

// const createTotalCost;

// Stripe Elements
let elements = stripe.elements();
let card = elements.create("card");
// let field_name;

let customer_name = document.getElementById("cart_customerName");
let customer_email = document.getElementById("cart_customerEmail");
let customer_Phone = document.getElementById("cart_customerPhone");

let createCustomer_name = document.createElement("p");
let createCustomer_email = document.createElement("p");
let createCustomer_Phone = document.createElement("p");

let cartMessage = document.createElement("p");

const form = document.getElementById("payment-form");

//
//
//

const paymentForm_elements = document.getElementById("payment-form");

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

paymentForm_elements.appendChild(cardElementLabel);
paymentForm_elements.appendChild(cardElementDiv);
paymentForm_elements.appendChild(cardErrorsDiv);

paymentForm_elements.appendChild(submitButton);

function paymentForm() {
  // Create the card element

  card = stripe.elements().create("card", {
    style: {
      base: {
        iconColor: "#000",
        color: "#000",
        fontWeight: "500",
        fontFamily: "minerva-modern",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "#000",
        },
        "::placeholder": {
          color: "#000",
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

  formData("customer_name", customer_name.value);

  formData("customer_email", customer_email.value);

  formData("customerPhone", customer_Phone.value);

  formData("selected_room", roomName);

  formData("selected_date", getFullDate);

  formData("selected_day", dayName);

  formData("what_is_the_occasion", selectEvents.value);

  formData("how_many_guests", elementPeopleCount.value);

  formData("deposited_price", stripe_amount);

  formData("total_cost", totalCost);

  formData("selected_menu", currentMenu.toUpperCase());

  formData("menu", packageTitle);

  formData("first_course", packageMenutitle_firstCourse);

  formData("firstCourseSelectedItems", firstCourseSelectedItems);

  formData("main_course", packageMenutitle_mainCourse);

  formData("mainCourseSelectedItems", mainCourseSelectedItems);

  formData("bar_package", barOptionSelectedName);
  formData("bar_package_price", barOptionSelectedPrice);

  formData("dessert_menu", selectedDesertOptions);

  formData("dessert_menu_items", getDesertChoice);

  // const buyButton = document.getElementById("submit-button");
  // buyButton.remove();
  // showDetails.appendChild(loadingElement);
  // form.style.opacity = ".6";
  // form.style.filter = "blur(4px)";

  console.log(customer_Phone.value + "Phone test");

  form.submit();
}

form.appendChild(cartMessage);

function cartDetails(e) {
  peopleCakeFees = cakeFees * Number(elementPeopleCount.value);

  let roomPrice = 0;
  let chargingAmount = depositeAmount;

  if (roomName == "The Garden") {
    packageCategoryPrice = 0;
    barOptionSelectedPrice = 0;
    peopleCakeFees = 0;
    roomPrice = roomRental;
    chargingAmount = 0;
  }

  package_with_people =
    Number(elementPeopleCount.value) * Number(packageCategoryPrice);

  totalCost =
    Number(roomPrice) +
    Number(chargingAmount) +
    package_with_people +
    Number(barOptionSelectedPrice) +
    Number(peopleCakeFees);

  console.log("room rental" + Number(roomRental));
  console.log("room package category " + Number(package_with_people));
  console.log("barOptionSelectedPrice" + Number(barOptionSelectedPrice));
  console.log("peopleCakeFees" + Number(peopleCakeFees));
  console.log("deposit price" + Number(depositeAmount));

  stripe_amount = depositeAmount * 100;

  console.log("Stripe amount deposite " + stripe_amount);

  // prevent default
  e.preventDefault();

  // reset the form

  console.log("works");

  createElement = true;

  console.log(roomName);

  if (roomName != "The Garden") {
    if (typeof packageTitle === "undefined" || packageTitle == "") {
      createElement = false;
      alert("please select menu options");
      return false;
    } else if (firstCourseSelectedItems == "") {
      createElement = false;
      alert("please select First course menu options");
      return false;
    } else if (mainCourseSelectedItems == "") {
      createElement = false;
      alert("please select Main course menu options");
      return false;
    } else if (
      typeof barOptionSelectedName === "undefined" ||
      barOptionSelectedName.textContent == ""
    ) {
      createElement = false;
      alert("please select Bar Packages's");
      return false;
    } else {
      createElement = true;
    }
  }

  if ((createElement = true)) {
    const cartContainer = document.querySelector("#cart");

    const close = document.querySelector("#close");

    cartContainer.classList.add("fixed-pos");
    cartContainer.classList.remove("d-none");

    cartForm.classList.add("d-none");

    close.addEventListener("click", function () {
      console.log(createElement);

      //reset value taht not needed in VIP

      // createFirstMenuWrappper.innerHTML = "";
      // createMainMenuWrappper.innerHTML = "";
      // createBarOptionTitle.innerHTML = "";
      // createDesertMenuWrapper.innerHTML = "";

      createElement = false;
      if (createElement == false) {
        cartContainer.classList.remove("fixed-pos");
        cartContainer.classList.add("d-none");
        cartForm.classList.remove("d-none");
      }
    });
  } else {
    cartContainer.classList.remove("fixed-pos");
    cartContainer.classList.add("d-none");
    cartForm.classList.remove("d-none");
  }

  if (createElement) {
    cartMessage.className = "cart-message";
    cartMessage.textContent =
      "Deposits will be deducted from the final bill at the conclusion of the event. Final payment is due immediately once the event has ended. Payment can be made in the form of credit card, cash or Pineville Tavern gift card. We do not accept personal or business checks of any kind to pay the balance. Pineville Tavern permits 4 separate transactions for all private events.";

    createCartTitle.className = "mt-0";
    createCartTitle.innerHTML = `<strong>Your Cart Details</strong>`;
    gettingInfo.appendChild(createCartTitle);

    createCustomer_name.className = "mt-0";
    createCustomer_name.innerHTML = `<strong>Name: ${customer_name.value}</strong>`;
    gettingInfo.appendChild(createCustomer_name);

    createCustomer_email.className = "mt-0";
    createCustomer_email.innerHTML = `<strong>Email: ${customer_email.value}</strong>`;
    gettingInfo.appendChild(createCustomer_email);

    createCustomer_Phone.className = "mt-0";
    createCustomer_Phone.innerHTML = `<strong>Phone: ${customer_Phone.value}</strong>`;
    gettingInfo.appendChild(createCustomer_Phone);

    createRoomItemTitle.className = "";
    createRoomItemTitle.innerHTML = `<strong>Selected Room: </strong> ${roomName}`;
    gettingInfo.appendChild(createRoomItemTitle);

    createEventDate.className = "";
    createEventDate.innerHTML = `<strong>Selected Date: </strong> ${getFullDate}`;
    gettingInfo.appendChild(createEventDate);

    createEventDay.className = "";
    createEventDay.innerHTML = `<strong>Selected Date: </strong> ${dayName}`;
    gettingInfo.appendChild(createEventDay);
    createEventTitle.className = "";
    createEventTitle.innerHTML = `<strong>What is the Occasion? : </strong> ${selectEvents.value}`;
    gettingInfo.appendChild(createEventTitle);

    createHowManyGuest.className = "";
    createHowManyGuest.innerHTML = `<strong>How Many Guests? : </strong> ${elementPeopleCount.value}`;
    gettingInfo.appendChild(createHowManyGuest);

    createDepositedPrice.className = "";
    createDepositedPrice.innerHTML = `<strong>Total Deposit Due : </strong> $${depositeAmount}`;
    gettingInfo.appendChild(createDepositedPrice);

    createTotalCost.className = "";
    createTotalCost.innerHTML = `<strong>Total Cost : </strong> $${totalCost}`;
    gettingInfo.appendChild(createTotalCost);

    createMenuItemsTitle.className = "";
    createMenuItemsTitle.innerHTML = `<strong>Selected Menu: </strong> ${currentMenu.toUpperCase()}`;
    gettingInfo.appendChild(createMenuItemsTitle);

    createMenuTitle.className = "";

    createMenuTitle.innerHTML = `<strong>Menu : </strong> ${packageTitle}`;
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
      optionElement = document.createElement("p");
      optionElement.textContent = selectedDesertOption;
      createDesertMenuWrapper.appendChild(optionElement);
      if (roomName == "The Garden") {
        createDesertMenuWrapper.removeChild(optionElement);
      }
    });

    gettingInfo.appendChild(createDesertMenuWrapper);

    // remove which we not need for GARDEN
    if (roomName == "The Garden") {
      packageCategoryPrice = 0;
      barOptionSelectedPrice = 0;
      peopleCakeFees = 0;

      if (createMenuTitle) {
        gettingInfo.removeChild(createMenuTitle);
      }

      if (createFirstMenuWrappper) {
        gettingInfo.removeChild(createFirstMenuWrappper);
      }

      if (createMainMenuWrappper) {
        gettingInfo.removeChild(createMainMenuWrappper);
      }

      if (createBarOptionTitle) {
        gettingInfo.removeChild(createBarOptionTitle);
      }

      if (createBarOptionPrice) {
        gettingInfo.removeChild(createBarOptionPrice);
      }

      if (createDesertMenuOption) {
        gettingInfo.removeChild(createDesertMenuOption);
      }

      VipHideMenuItems == false;
    }
  }

  if (createElement != false) {
    paymentForm();
  }

  createElement = false;
}

const cartForm = document.querySelector("#cart-form");

cartForm.addEventListener("submit", cartDetails);
