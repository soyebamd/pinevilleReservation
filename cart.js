let createElement = false;

const cartButton = document.querySelector("#addtocart");
const gettingInfo = document.querySelector("#getting-info");

let cartTitle = document.createElement("h2");
let roomItemtitle = document.createElement("p");
let eventDate = document.createElement("p");
let eventTitle = document.createElement("p");
let howManyGuest = document.createElement("p");
let selectedMenuItems_Title = document.createElement("h4");

function cartDetails() {
  // reset the form

  createElement = true;

  if ((createElement = true)) {
    const roomItems = document.querySelector(".room-items.active");
    const roomItemsValue = roomItems.textContent;

    cartTitle.className = "mt-0";
    cartTitle.innerHTML = `<strong>Your Cart Details</strong>`;
    gettingInfo.appendChild(cartTitle);

    roomItemtitle.className = "";
    roomItemtitle.innerHTML = `<strong>Selected Room: </strong> ${roomItemsValue}`;
    gettingInfo.appendChild(roomItemtitle);

    eventDate.className = "";
    eventDate.innerHTML = `<strong>Selected Date: </strong> ${getFullDate}`;
    gettingInfo.appendChild(eventDate);

    eventTitle.className = "";
    eventTitle.innerHTML = `<strong>What is the Occasion? : </strong> ${selectEvents.value}`;
    gettingInfo.appendChild(eventTitle);

    howManyGuest.className = "";
    howManyGuest.innerHTML = `<strong>How Many Guests? : </strong> ${elementPeopleCount.value} People`;
    gettingInfo.appendChild(howManyGuest);

    selectedMenuItems_Title.className = "";
    selectedMenuItems_Title.innerHTML = `<strong>Selected Dinner? : </strong> ${titleH4.toUpperCase()}`;
    gettingInfo.appendChild(selectedMenuItems_Title);
  }

  createElement = false;
}

cartButton.addEventListener("click", cartDetails);
