let createElement = false;

const cartButton = document.querySelector("#addtocart");
const gettingInfo = document.querySelector("#getting-info");

let cartTitle = document.createElement("h2");
let roomItemtitle = document.createElement("p");
let eventDate = document.createElement("p");
let eventTitle = document.createElement("p");
let howManyGuest = document.createElement("p");
let selectedMenuItems_Title = document.createElement("h4");

let firstMenuWrappper = document.createElement("ul");

let mainMenuWrappper = document.createElement("ul");

let menuTitle = document.createElement("p");

let firstCourseTitle = document.createElement("p");

let mainCourseTitle = document.createElement("p");
let firstMenufirstmenuSelected;
let mainMenufirstmenuSelected;
let selected;

function cartDetails() {
  // firstMenufirstmenuSelected.textContent = "";
  // mainMenufirstmenuSelected.textContent = "";

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
    selectedMenuItems_Title.innerHTML = `<strong>Selected Dinner? : </strong> ${currentMenu.toUpperCase()}`;
    gettingInfo.appendChild(selectedMenuItems_Title);

    menuTitle.className = "";
    menuTitle.innerHTML = `<strong>Menu : </strong> ${packageTitle.textContent}`;
    gettingInfo.appendChild(menuTitle);

    gettingInfo.appendChild(firstMenuWrappper);
    gettingInfo.appendChild(mainMenuWrappper);

    // Reset existing lists
    firstMenuWrappper.innerHTML = "";
    mainMenuWrappper.innerHTML = "";

    firstCourseTitle.className = "";
    firstCourseTitle.innerHTML = `<strong>First Course : </strong> ${packageMenutitle_firstCourse}`;
    firstMenuWrappper.appendChild(firstCourseTitle);

    firstCourseSelectedItems.forEach((firstMenu) => {
      firstMenufirstmenuSelected = document.createElement("li");
      firstMenufirstmenuSelected.textContent = firstMenu;
      firstMenuWrappper.appendChild(firstMenufirstmenuSelected);
    });

    mainCourseTitle.className = "";
    mainCourseTitle.innerHTML = `<strong>Main Course : </strong> ${packageMenutitle_mainCourse}`;
    mainMenuWrappper.appendChild(mainCourseTitle);

    mainCourseSelectedItems.forEach((secondMenu) => {
      mainMenufirstmenuSelected = document.createElement("li");
      mainMenufirstmenuSelected.textContent = secondMenu;
      mainMenuWrappper.appendChild(mainMenufirstmenuSelected);
    });
  }

  createElement = false;
}

cartButton.addEventListener("click", cartDetails);
