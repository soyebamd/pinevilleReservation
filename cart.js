const cartButton = document.querySelector("#addtocart");
const gettingInfo = document.querySelector("#getting-info");

cartButton.addEventListener("click", function () {
  // reset the form

  const roomItems = document.querySelector(".room-items.active");
  const roomItemsValue = roomItems.textContent;
  //console.log(roomItemsValue);

  let cartTitle = document.createElement("h2");
  cartTitle.className = "mt-0";
  cartTitle.innerHTML = `<strong>Your Cart Details</strong>`;
  gettingInfo.appendChild(cartTitle);

  let roomItemtitle = document.createElement("p");
  roomItemtitle.className = "";
  roomItemtitle.innerHTML = `<strong>Selected Room: </strong> ${roomItemsValue}`;
  gettingInfo.appendChild(roomItemtitle);

  let eventDate = document.createElement("p");
  eventDate.className = "";
  eventDate.innerHTML = `<strong>Selected Room: </strong> ${getFullDate}`;
  gettingInfo.appendChild(eventDate);
});
