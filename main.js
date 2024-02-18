// Pineville Tavern Rservaton System
// Software Version - V0.0
// https://www.pinevilletavern.com/

// Events
const events = [
  "Wedding",
  "Rehearsal Dinner",
  "Bridal Shower",
  "Baby Shower",
  "Anniversary",
  "Birthday",
  "Corporate Event",
  "Social Group",
];

// People

const peopleCount = [35, 35, 100];

let getPeopleCount = 0;

// Days
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let getFullDate;
let currentDate;
let day;
let month;
let year;

let selectedDay;

function selectedDateFunction(dateInput) {
  currentDate = dateInput;
  day = currentDate.getDate();
  month = currentDate.getMonth();
  year = currentDate.getFullYear();
  getFullDate = day + "/" + monthNames[month] + "/" + year;
}

//console.log(selectedDay + " selected dayd d");

// Deposite
const deposite = [200, 400, 1500];
const roomRentalFees = [200, 400, 6000];

//menu selection
const menu = ["Lunch", "Dinner", "VIP Treat"];

//Bar Selection
const barSelection = {
  barName: ["Consumption Bar", "Cash Bar"],
  barPrice: [125, 125],
};

let cakecost = 0;
const dessertMenu = 3; //$3

const reservationTitle = ["1742 Room", "Mural Room", "The Garden"];
const reservationSubTitle = [
  "12 to 35 guests",
  "12 to 35 guests",
  "up to 100 guests",
];

//Rooms 1. Pineville Tavern, 2. Mural Room, 3. The Garden
const pinevilleRoom = {
  title: reservationTitle[0],
  subtitle: reservationSubTitle[0],
  people: peopleCount[0],
  day: selectedDay,
  package_alpha: deposite[1],
  package_beta: deposite[0],
  rentalRoom_alpha: roomRentalFees[1],
  rentalRoom_beta: roomRentalFees[0],
  deposite: function () {
    if (
      this.day == "Friday" ||
      this.day == "Saturday" ||
      this.day == "Sunday"
    ) {
      return this.package_alpha;
    } else {
      return this.package_beta;
    }
  },
  roomRental: function () {
    if (
      this.day == "Friday" ||
      this.day == "Saturday" ||
      this.day == "Sunday"
    ) {
      return this.rentalRoom_alpha;
    } else {
      return this.rentalRoom_beta;
    }
  },

  menuSelection: [menu[0], menu[1]],
  barOption: true,
  cakeCutting: true,
};

const muralRoom = {
  title: reservationTitle[1],
  subtitle: reservationSubTitle[1],
  people: peopleCount[1],
  day: selectedDay,
  package_alpha: deposite[1],
  package_beta: deposite[0],
  rentalRoom_alpha: roomRentalFees[1],
  rentalRoom_beta: roomRentalFees[0],
  deposite: function () {
    if (
      this.day == "Friday" ||
      this.day == "Saturday" ||
      this.day == "Sunday"
    ) {
      return this.package_alpha;
    } else {
      return this.package_beta;
    }
  },
  roomRental: function () {
    if (
      this.day == "Friday" ||
      this.day == "Saturday" ||
      this.day == "Sunday"
    ) {
      return this.rentalRoom_alpha;
    } else {
      return this.rentalRoom_beta;
    }
  },

  menuSelection: [menu[0], menu[1]],
  barOption: true,
  cakeCutting: true,
};

const theGarden = {
  title: reservationTitle[2],
  subtitle: reservationSubTitle[2],
  people: peopleCount[2],
  day: selectedDay,
  package_alpha: deposite[2],
  package_beta: deposite[2],
  rentalRoom_alpha: roomRentalFees[2],
  rentalRoom_beta: roomRentalFees[2],
  deposite: function () {
    if (
      this.day == "Friday" ||
      this.day == "Saturday" ||
      this.day == "Sunday"
    ) {
      return this.package_alpha;
    } else {
      return this.package_beta;
    }
  },
  roomRental: function () {
    if (
      this.day == "Friday" ||
      this.day == "Saturday" ||
      this.day == "Sunday"
    ) {
      return this.rentalRoom_alpha;
    } else {
      return this.rentalRoom_beta;
    }
  },

  menuSelection: [menu[2]],
  vipTreat:
    "VIP personal meeting with the Chef and The Pineville Tavern team to plan your custom menu",
};

const rooms = [pinevilleRoom, muralRoom, theGarden];

// Get Elements From Page
const elementReservationTitle = document.querySelector("#reservation-title");
const elementTitle = document.querySelector("#title");
const elementPeopleCount = document.querySelector("#select-people");

const elementMaxPeople = document.querySelector("#max-people");
const elementDepositeDue = document.querySelector("#deposite");
const elementRoomRental = document.querySelector("#room-rental");
const elementMenuMessage = document.querySelector("#menu-message");

let menuWrapper = document.querySelector("#menu-wrapper");
let cakeOptionsWrapper = document.querySelector("#cake-options-wrapper");
const selectMenu = document.querySelectorAll('[name="menu-selection"]');

const selectEvents = document.querySelector("#events");

let activeNav = false;
let roomNav;
// menuBAR wrappper

const barOptionsWrapper = document.querySelector("#bar-options-wrapper");

//const selectedMenu = document.querySelector("#selected-menu");

//Create form delemnt dynamically

//Ajax request to call menu

let currentMenu;
// launch 1
let menuItem;
let wraplist;
let firstCourse;
let firstCourse0;
let firstCourse1;
let firstCourse2;

let mainCourse0;
let mainCourse1;
let mainCourse2;
let menuIds;

function lunchPackage() {
  function menuItems(id, menuId, uniqueIdendifier, menu, index) {
    // input

    menuItem = document.createElement("input");
    menuItem.type = "checkbox";
    menuItem.className = "form-check-input";
    menuItem.name = menu.toLowerCase().replace(/\s+/g, "-");
    menuItem.id = uniqueIdendifier + "-" + index;
    menuItem.value = menu;

    //label
    chekboxLabel = document.createElement("label");
    chekboxLabel.setAttribute("for", menuItem.id);
    chekboxLabel.textContent = menuItem.value;

    chekboxLabel.className = "form-check-label";
    wraplist = document.createElement("div");
    wraplist.className = "menu-item";

    wraplist.appendChild(menuItem);
    wraplist.appendChild(chekboxLabel);
    menuId.appendChild(wraplist);
  }

  let menuCourse = packageMenu[currentMenu].title;
  const containerDiv = document.getElementById("row-container");

  //tittle

  menuCourse.forEach((addItem, index) => {
    const colDiv = document.createElement("div");
    colDiv.className = "col-md-4";

    const menuDiv = document.createElement("div");
    menuDiv.className = "menu " + currentMenu + "-" + index;

    // First Course
    //Menu Title
    const titleH4 = document.createElement("h4");
    titleH4.className = "menu__title";
    titleH4.textContent = menuCourse[index];

    //First|course wrapper

    const firstCourseWrapper = document.createElement("div");
    firstCourseWrapper.className = "first-course-menu__items";

    const firstCourse = document.createElement("div");
    firstCourse.className = "menu__items";
    firstCourse.id = "first-course-" + index;

    //##############################First|course wrapper##############################################
    // const firstCourse_child = document.createElement("div");
    // firstCourse_child.className = "menu__item";

    // firstCourse title
    const firstCourse_selection = document.createElement("p");
    firstCourse_selection.innerHTML =
      "<strong>" +
      packageMenu[currentMenu].firstCourse.subtitle[index] +
      "</strong>";

    const firstCourseSubHeading = document.createElement("p");
    firstCourseSubHeading.textContent =
      packageMenu[currentMenu].firstCourse.itemOption[index];

    //# End First Course

    //##############################MAIN|course wrapper##############################################

    const mainCourseWrapper = document.createElement("div");
    mainCourseWrapper.className = "main-course-menu__items";

    const mainCourse = document.createElement("div");
    mainCourse.className = "menu__items";
    mainCourse.id = "main-course-" + index;

    const menuHighLighter = document.createElement("p");
    menuHighLighter.className = "menu__highlighter fw-bold";
    menuHighLighter.id = "main-menu__highlighter-" + index;
    menuHighLighter.textContent =
      packageMenu[currentMenu].firstCourse.itemHiglighter[index];

    // Main course content
    const mainCourse_selection = document.createElement("p");
    mainCourse_selection.innerHTML =
      "<strong>" +
      packageMenu[currentMenu].mainCourse.subtitle[index] +
      "</strong>";

    const mainCourseSubHeading = document.createElement("p");
    mainCourseSubHeading.textContent =
      packageMenu[currentMenu].mainCourse.itemOption[index];

    // packagePrice

    const packagePrice = document.createElement("p");
    packagePrice.className = "menu__items__price";
    packagePrice.textContent =
      "$" + packageMenu[currentMenu].price[index] + "  per person";

    // append invividually
    menuDiv.appendChild(titleH4);
    // Append first course

    // firstCourseWrapper;

    menuDiv.appendChild(firstCourseWrapper);
    firstCourseWrapper.appendChild(firstCourse_selection);
    firstCourseWrapper.appendChild(firstCourseSubHeading);

    //firstCourseWrapper.appendChild(firstCourse_child);
    firstCourseWrapper.appendChild(firstCourse);

    //mainCourseWrapper

    menuDiv.appendChild(mainCourseWrapper);
    mainCourseWrapper.appendChild(mainCourse_selection);
    mainCourseWrapper.appendChild(mainCourseSubHeading);
    mainCourseWrapper.appendChild(mainCourse);
    mainCourseWrapper.appendChild(menuHighLighter);
    mainCourseWrapper.appendChild(packagePrice);

    // Append main course

    colDiv.appendChild(menuDiv);

    // Append the constructed menu to the container div
    containerDiv.appendChild(colDiv);

    let firstCourseww = document.querySelector("#first-course-" + index);
    // FIRST COURSE ITEMS SET TO FUNCTION
    menuIds = "first-course-" + index;

    packageMenu[currentMenu].firstCourse["lunch_" + index].forEach(
      (menu, index) => {
        menuItems(index, firstCourseww, menuIds, menu, index);
      }
    );
    // MAIN COURSE ITEMS SET TO FUNCTION
    let mainCourseww = document.querySelector("#main-course-" + index);

    menuIds = "main-course-" + index;

    packageMenu[currentMenu].mainCourse["lunch_" + index].forEach(
      (menu, index) => {
        menuItems(index, mainCourseww, menuIds, menu, index);
      }
    );
  });

  // Load Extra Menu to Choose

  const barContainer = document.querySelector("#bar-container");

  const colCount = 3;

  let col;

  for (let i = 1; i <= colCount; i++) {
    col = document.createElement("div");
    col.className = "col-md-4";
    col.id = "col-" + i;

    barContainer.appendChild(col);
  }

  function barMenuItems(menuId, inputName, labelText, inputValue, index) {
    // input

    menuItem = document.createElement("input");
    menuItem.type = "checkbox";
    menuItem.className = "form-check-input";
    menuItem.name = inputName;
    menuItem.id = inputName.toLowerCase().replace(/\s+/g, "-") + index;
    menuItem.value = inputValue;

    //label
    chekboxLabel = document.createElement("label");
    chekboxLabel.setAttribute("for", menuItem.id);
    chekboxLabel.innerHTML = "<span class='labelText'>" + labelText + "</span>";
    chekboxLabel.id = menuItem.id;
    chekboxLabel.className = "form-check-label";
    wraplist = document.createElement("div");
    wraplist.className = "menu-item";

    wraplist.appendChild(menuItem);
    wraplist.appendChild(chekboxLabel);
    menuId.appendChild(wraplist);
  }

  const extraItemCol1 = document.querySelector("#col-1");
  const extraItemCol2 = document.querySelector("#col-2");
  const extraItemCol3 = document.querySelector("#col-3");

  const barHeading = document.createElement("h3");
  barHeading.textContent = "Bar";
  const barSubheading = document.createElement("p");
  barSubheading.innerHTML = "Bar Packages's <br> 3 hours. Priced Per Person ";
  extraItemCol1.appendChild(barHeading);
  extraItemCol1.appendChild(barSubheading);
  barMenu.title.forEach((menu, index) => {
    let getPrice = barMenu.price[index];

    barMenuItems(
      extraItemCol1,
      "barOptions",
      menu + " $" + getPrice,
      getPrice,
      index
    );
  });

  const desertHeading = document.createElement("h3");
  desertHeading.textContent = "Dessert Menu";
  extraItemCol2.appendChild(desertHeading);

  //

  // Create radio buttons for the menu options
  let showDefaultDesertMenu = false;
  dessertMenuItems.menu.forEach((menuItem, index) => {
    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.id = "menu-option-" + index;
    radioButton.name = "menu-option";
    radioButton.value = menuItem;

    if (index == 0) {
      radioButton.setAttribute("checked", true);
      showDefaultDesertMenu = true;
    }

    const label = document.createElement("label");
    label.setAttribute("for", "menu-option-" + index);
    label.textContent = menuItem;

    extraItemCol2.appendChild(radioButton);
    extraItemCol2.appendChild(label);
    extraItemCol2.appendChild(document.createElement("br"));
  });

  const radioOptionContainer = document.createElement("div");
  radioOptionContainer.id = "radioOptionContainer";

  // const optionWrapper = document.querySelector("#radioOptionContainer");
  extraItemCol2.appendChild(radioOptionContainer);

  // Add event listener to radio buttons
  const radioButtons = document.querySelectorAll('input[name="menu-option"]');
  if (showDefaultDesertMenu) {
    dessertMenuItems.menuOptions[0].forEach((firstItem, index) => {
      barMenuItems(
        radioOptionContainer,
        "desert-option-menu",
        firstItem,
        firstItem,
        index // Use index 0 to load only the default option
      );
    }); // Get the default option
  }

  radioButtons.forEach((radioButton, index) => {
    radioButton.addEventListener("change", (event) => {
      radioOptionContainer.textContent = "";
      const selectedMenu = event.target.value;
      console.log("Selected Menu:", index + selectedMenu);

      dessertMenuItems.menuOptions[index].forEach((menuItems, index) => {
        barMenuItems(
          radioOptionContainer,
          "desert-option-menu",
          menuItems,
          menuItems,
          index
        );
      });
    });
  });

  // Message

  const messageWrapper = document.createElement("div");

  messageWrapper.className = "message";

  extraItemCol3.appendChild(messageWrapper);

  message.forEach((message) => {
    const messageP = document.createElement("p");
    messageP.className = "message_txt";
    messageP.textContent = message;
    messageWrapper.appendChild(messageP);
  });

  //
}

let menuContainer;

function loadMenu() {
  menuContainer = document.querySelector("#menu");
  lunchPackage();
  // Validation Fields

  const validateMenu = document.querySelectorAll(".menu");

  function validationOfMenuItems(menuCate, courseForValidation) {
    validateMenu.forEach((menu, i) => {
      console.log(menu);
      // const getSameMenuIndex = document.querySelector();
      const lunchElement = document.querySelector("." + currentMenu + "-" + i);
      const firstCourseMenuItems = lunchElement.querySelectorAll(
        "." + menuCate
      );

      if (firstCourseMenuItems.length > 0) {
        firstCourseMenuItems.forEach((courseMenuItems) => {
          const inputCol =
            courseMenuItems.querySelectorAll(".form-check-input");
          let selectedItem = 0;
          inputCol.forEach((inputChecked) => {
            inputChecked.addEventListener("change", function () {
              // Changed "input" to "change"
              const maxChoices =
                packageMenu[currentMenu][courseForValidation].maxSelection[i];

              if (this.checked) {
                selectedItem++;
                if (selectedItem > maxChoices && maxChoices !== -1) {
                  alert("Can't select more than " + maxChoices + " Items");
                  this.checked = false;
                  selectedItem--; // Decrement count if selection exceeds limit
                }
              } else {
                selectedItem--; // Decrement count when checkbox is unchecked
              }
            });
          });
        });
      } else {
        console.log("ERROR" + i);
      }
    });
  }

  validationOfMenuItems("first-course-menu__items", "firstCourse");
  validationOfMenuItems("main-course-menu__items", "mainCourse");
}

function loadPageIntoParent(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById("content").innerHTML = html;
      // get value from menu
      loadMenu();

      //
      //
      //
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

// check box
let checkOptio;
let radioLabel;
function createInput(
  element,
  inputType,
  inputClass,
  inputName,
  id,
  index,
  labelId,
  parentWrapper
) {
  // input
  checkOption = document.createElement(element);
  checkOption.type = inputType;
  checkOption.className = inputClass;
  checkOption.name = inputName;
  checkOption.id = id.toLowerCase().replace(/\s+/g, "-");
  checkOption.value = id;

  // label
  // create label
  radioLabel = document.createElement("label");
  radioLabel.setAttribute("for", checkOption.id);
  radioLabel.textContent = checkOption.value;
  radioLabel.id = labelId;
  radioLabel.className = "form-check-label";

  // add to wrapper
  parentWrapper.appendChild(checkOption);
  parentWrapper.append(radioLabel);
}

events.forEach((event) => {
  let eventOption = document.createElement("option");
  eventOption.textContent = event;
  eventOption.value = event;

  selectEvents.appendChild(eventOption);
});

let depositeAmount;
let roomRental;
let roomIndex;

function mainEngine(getIndex) {
  elementTitle.textContent = rooms[getIndex].title;

  getPeopleCount = rooms[getIndex].people;

  elementMaxPeople.textContent = getPeopleCount;

  elementPeopleCount.innerHTML = "";
  elementMenuMessage.textContent = "Select Lunch or Dinner";
  function createPeopleCountList(optionContent) {
    numberOfPeople = document.createElement("option");
    numberOfPeople.textContent = optionContent;
    numberOfPeople.value = optionContent;

    if (numberOfPeople.value == 12) {
      numberOfPeople.selected = true;
    }

    elementPeopleCount.appendChild(numberOfPeople);
  }

  createPeopleCountList("Select People");

  //
  for (let intPeople = 0; intPeople <= getPeopleCount; intPeople++) {
    createPeopleCountList(intPeople);
  }

  depositeAmount = rooms[getIndex].deposite();
  console.log(getIndex + " get error fixed");

  if (depositeAmount == 200) {
    elementDepositeDue.textContent =
      "Room Rental Fee (100% deposit) Monday, Tuesday, Wednesday, Thursday $" +
      depositeAmount;
  }

  if (depositeAmount == 400) {
    elementDepositeDue.textContent =
      "Room Rental Fee (100% deposit) Friday, Saturday, Sunday $" +
      depositeAmount;
  }

  roomRental = rooms[getIndex].roomRental();
  roomIndex = getIndex;

  //elementRoomRental.textContent = "Room Rentalss: " + roomRental;

  // Menu Selection

  menuWrapper.innerHTML = "";

  rooms[getIndex].menuSelection.forEach((menu, index) => {
    // create check/radiobox

    createInput(
      "input",
      "radio",
      "form-check-input",
      "menu-selection",
      menu,
      index,
      "message",
      menuWrapper
    );

    if (elementTitle.textContent == roomNav[index].getAttribute("data-link")) {
      roomNav[index].classList.add("active");
    }

    if (index === 0) {
      checkOption.setAttribute("checked", true);
      console.log(checkOption.value + " Loading Menu");
      if (checkOption.value == "Lunch") {
        currentMenu = "lunch";
        loadPageIntoParent("menu.html");
      }
    }

    if (menu === "VIP Treat") {
      const message = document.querySelector("#message");
      elementMenuMessage.textContent = menu;
      message.textContent = `VIP personal meeting with the Chef and The Pineville Tavern team to plan your custom menu `;
    }
  });
  //if checked load menu via ajax
  const menuSelection = document.querySelectorAll('[name="menu-selection"]');

  const loadingOption = document.getElementById("content");
  loadingOption.textContent = "";
  content.textContent = "";

  menuSelection.forEach((menuOption) => {
    menuOption.addEventListener("change", function () {
      if (this.checked) {
        console.log(this.value + " Loading Menu");

        if (this.value == "Lunch") {
          currentMenu = "lunch";
          loadPageIntoParent("menu.html");
        } else {
          currentMenu = "dinner";
          loadPageIntoParent("menu.html");
        }
      }
    });
  });

  //cake cutting section
  //reset
}

rooms.forEach((title, index) => {
  console.log(index + "roomname");
  let items = document.createElement("li");
  items.setAttribute("data-link", title.title);
  items.setAttribute("data-index", title.title);

  console.log(items.getAttribute("data-link"));

  items.className = "list-group-item room-items";

  items.textContent = title.title + " (" + title.subtitle + ")";

  elementReservationTitle.appendChild(items);

  roomNav = document.querySelectorAll(".room-items");

  // add main engine
  function handleClick() {
    roomNav.forEach((nav) => {
      nav.classList.remove("active");
      activeNav = false;
    });

    activeNav = true;
    if (activeNav) {
      this.classList.add("active");
    }
    mainEngine(index);

    updateDayRoomPrice(roomIndex, selectedDay);
  }

  items.addEventListener("click", handleClick);
});

mainEngine(0);

selectedDateFunction(new Date());

function updateDayRoomPrice(roomindex, day) {
  rooms[roomindex].day = day;
  //console.log(rooms[roomIndex].deposite());

  depositeAmount = rooms[roomindex].deposite();
  roomRental = rooms[roomIndex].roomRental();

  if (depositeAmount == 200) {
    elementDepositeDue.textContent =
      "Room Rental Fee (100% deposit) Monday, Tuesday, Wednesday, Thursday $" +
      depositeAmount;
  }

  if (depositeAmount == 400) {
    elementDepositeDue.textContent =
      "Room Rental Fee (100% deposit) Friday, Saturday, Sunday $" +
      depositeAmount;
  } else {
    elementDepositeDue.textContent =
      "The Garden - Room Rental Fee $" +
      roomRental +
      " ( deposit $" +
      depositeAmount +
      " )";
  }

  console.log(getFullDate);
}

console.log("On Load:", getFullDate);

$(function () {
  $("#datepicker-container").datepicker({
    minDate: 0,
    dateFormat: "mm-dd-yy",

    onSelect: function (dateText) {
      // Get the day

      let selectedDate = new Date(dateText);
      let dayIndex = selectedDate.getDay();
      let getDay = days[dayIndex];
      selectedDay = getDay;
      console.log("Selected Date:", getDay);

      // You can do more with the selected date here
      selectedDateFunction(selectedDate);
      updateDayRoomPrice(roomIndex, getDay);
    },
  });

  $("#datepicker-container")
    .datepicker("widget")
    .appendTo("#datepicker-container");
});
