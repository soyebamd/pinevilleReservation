// Pineville Tavern Rservaton SystemroomName
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

// these are block date and data
const blockDate = ["3/20/2024", "3/22/2024", "3/25/2024", "4/10/2024"];

const blockRoom = ["1742 Room", "Mural Room", "1742 Room", "The Garden"];

const blockMenu = ["Lunch", "Dinner", "Dinner", "Lunch"];

// convert for block menu Real

for (let i = 0; i < blockMenu.length; i++) {
  if (blockMenu[i] === "Lunch") {
    blockMenu[i] = "Dinner";
  } else if (blockMenu[i] === "Dinner") {
    blockMenu[i] = "Lunch";
  }
}

// # end these are block date and data

let currentSelectedDate;

// People

const peopleCount = [35, 35, 100];

let getPeopleCount = 0;

let roomName;

let packagePrice;
let packageTitle;
let packageMenutitle_firstCourse;

let packageMenutitle_mainCourse;
let appendToRight;
let firstCourseSelectedItems = [];
let mainCourseSelectedItems = [];

let packageCategoryPrice = 0;

let barOptionSelectedName;
let barOptionSelectedPrice = 0;

let menuOptionSelectedValue;
let menuOptionSelectedId;
let selectedDesertOptions;
let selectedDesertOptionsPrice;
let cakeFees = 0;
let VipHideMenuItems = false;

let getDesertChoice = [];
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

currentDate = new Date();

day = currentDate.getDay();

let dayName = days[day];

function selectedDateFunction(dateInput) {
  currentDate = dateInput;
  day = currentDate.getDate();
  month = currentDate.getMonth();
  year = currentDate.getFullYear();
  getFullDate = day + "/" + monthNames[month] + "/" + year;
}

console.log(day + " selected dayd d");

// Deposite
const deposite = [200, 400, 1500];
const roomRentalFees = [200, 400, 6000];

const getDepositeMessage = [
  " 1742 & Mural Room Rental  Fee (100% deposit) Monday, Tuesday, Wednesday, Thursday $" +
    deposite[0],

  " 1742 & Mural Room Rental  Fee (100% deposit) Friday, Saturday, Sunday $" +
    deposite[1],

  "The Garden - Room Rental Fee $" +
    roomRentalFees[2] +
    " ( deposit $" +
    deposite[2] +
    " )",
];

//menu selection
const menu = ["Lunch", "Dinner", "VIP Treat"];

const menuMessage = ["Select 1 of 3 menus", "Select 1 of 4 menus", ""];

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

  menuSelection: function () {
    let foundMatch = false;
    let loadMenu;
    blockDate.forEach((notAvailable, i) => {
      if (currentSelectedDate === notAvailable && this.title === blockRoom[i]) {
        console.log(blockMenu[i] + " The Menu ");
        menu.forEach((traceMenu, Menuindex) => {
          if (traceMenu == blockMenu[i]) {
            //  console.log("stop here" + traceMenu + "menu index" + index);

            loadMenu = Menuindex;
            currentMenu = blockMenu[i].toLowerCase();
            VipHideMenuItems = false;

            loadPageIntoParent("menu.html");

            foundMatch = true;
          }
        });
      }
    });

    if (foundMatch) {
      return [menu[loadMenu]];
    } else {
      return [menu[0], menu[1]];
    }
  },

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

  menuSelection: pinevilleRoom.menuSelection,

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

  // menuSelection: function () {
  //   return [menu[2]];
  // },

  // menuSelection: function () {
  //   return [menu[2]];
  // },

  menuSelection: function () {
    return [menu[2]];
  },

  vipTreat:
    "VIP personal meeting with the Chef and The Pineville Tavern team to plan your custom menu",

  // add logic here
  //menuPackages: [menu[0], menu[1]],

  menuPackages: function () {
    let foundMatch = false;
    let loadMenu;
    blockDate.forEach((notAvailable, i) => {
      if (currentSelectedDate === notAvailable && this.title === blockRoom[i]) {
        menu.forEach((traceMenu, Menuindex) => {
          if (traceMenu == blockMenu[i]) {
            //  console.log("stop here" + traceMenu + "menu index" + index);

            loadMenu = Menuindex;
            //  currentMenu = blockMenu[i].toLowerCase();
            VipHideMenuItems = false;

            //    loadPageIntoParent("menu.html");

            foundMatch = true;
          }
        });
      }
    });

    if (foundMatch) {
      return [menu[loadMenu]];
    } else {
      return [menu[0], menu[1]];
    }
  },
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
let selectSelectionMenu = document.querySelector("#menu-selection-message");

const selectEvents = document.querySelector("#events");

let createDepositeMessage;
deposite.forEach((depositeMessage, index) => {
  createDepositeMessage = document.createElement("p");
  createDepositeMessage.id = "deposite" + depositeMessage;
  createDepositeMessage.textContent = getDepositeMessage[index];
  createDepositeMessage.className = "roomMessageList";

  createDepositeMessage.setAttribute("data-price", depositeMessage);

  elementDepositeDue.appendChild(createDepositeMessage);
});

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
    colDiv.className = "col-lg-4 mb-2";

    const menuDiv = document.createElement("div");
    menuDiv.className = "menu " + currentMenu + "-" + index;

    // First Course
    //Menu Title
    const titleH4 = document.createElement("h4");
    titleH4.className = "menu__title";
    titleH4.textContent =
      menuCourse[index] + " $" + packageMenu[currentMenu].price[index];
    //packageTitle = tmenuCourse[index];

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
      "<strong class='first-course-selection'>" +
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
      "<strong class='main-course-selection'>" +
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

    const packageMenuPrice = document.createElement("input");
    packageMenuPrice.type = "radio";
    packageMenuPrice.className = "package-price";
    packageMenuPrice.name = "packageMEnu";
    packageMenuPrice.id = "package" + "-" + index;
    packageMenuPrice.value = packageMenu[currentMenu].price[index];

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
    mainCourseWrapper.appendChild(packageMenuPrice);

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
  //
  //
  //
  //
  //
  //

  //
  //
  //
  //
  //
  //
  //
  //

  // getting menu Data
  console.log("not duble");
  let checkOptionsMenu = document.querySelectorAll(".menu");
  let menu__title = document.querySelectorAll(".menu__title");
  let coursetitle_first = document.querySelectorAll(".first-course-selection");
  let coursetitle_main = document.querySelectorAll(".main-course-selection");

  packagePrice = document.querySelectorAll(".package-price");

  checkOptionsMenu.forEach((selectedMenu, index) => {
    selectedMenu.addEventListener("click", function () {
      packageMenutitle_firstCourse = coursetitle_first[index].textContent;
      packageMenutitle_mainCourse = coursetitle_main[index].textContent;

      selectedMenu.classList.add("selected-menu");

      checkOptionsMenu.forEach((ss, index) => {
        ss.classList.remove("selected-menu");
      });

      packagePrice[index].checked = true;

      //resent all already selected menus

      if ((packagePrice[index].checked = true)) {
        console.log(packagePrice[index].value);

        packageCategoryPrice = packagePrice[index].value;

        checkOptionsMenu[index].classList.add("selected-menu");
        packageTitle = menu__title[index].textContent;

        const firstSelectedMenu = document.querySelectorAll(
          ".selected-menu .first-course-menu__items .form-check-input"
        );
        firstCourseSelectedItems = [];
        firstSelectedMenu.forEach((selectedItem) => {
          if (selectedItem.checked) {
            console.log(selectedItem.value); // Log the value of the checked item
            firstCourseSelectedItems.push(selectedItem.value);
          }
        });

        const mainSelectedMenu = document.querySelectorAll(
          ".selected-menu .main-course-menu__items .form-check-input"
        );
        mainCourseSelectedItems = [];
        mainSelectedMenu.forEach((selectedItem) => {
          if (selectedItem.checked) {
            console.log(selectedItem.value); // Log the value of the checked item
            mainCourseSelectedItems.push(selectedItem.value);
          }
        });
      }
    });
  });

  //# end menu data

  // Load Extra Menu to Choose

  const barContainer = document.querySelector("#bar-container");

  const colCount = 3;

  let col;

  for (let i = 1; i <= colCount; i++) {
    col = document.createElement("div");
    col.className = "col-lg-4";
    col.id = "col-" + i;

    barContainer.appendChild(col);
  }

  function barMenuItems(
    type,
    menuId,
    inputName,
    labelText,
    inputValue,

    index
  ) {
    // input

    menuItem = document.createElement("input");
    menuItem.type = type;
    menuItem.className = "form-check-input";
    menuItem.name = inputName;
    menuItem.id = inputName.toLowerCase().replace(/\s+/g, "-") + index;
    menuItem.value = inputValue;
    menuItem.setAttribute("data-labelText", labelText);

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
      "radio",
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

  const desertpara = document.createElement("p");
  desertpara.innerHTML =
    "Optional Dessert Packages Select 2 Desserts $10. Priced Per Person. <br> Bring Your Own Cake $3. Priced Per Person Cutting Fee";
  extraItemCol2.appendChild(desertpara);

  //

  const chooseTwoContainer = document.createElement("div");
  chooseTwoContainer.id = "choose-two-desert";
  chooseTwoContainer.className = "my-3 border-bottom pb-2";

  const optionLabelcontainer = document.createElement("div");
  optionLabelcontainer.className = "option-label";

  const optionLabelcontainer1 = document.createElement("div");
  optionLabelcontainer1.className = "option-label";

  const optionLabelcontainer2 = document.createElement("div");
  optionLabelcontainer2.className = "option-label";

  const chooseTwoitems = document.createElement("div");
  chooseTwoitems.id = "choose-two-desert-container";

  const chooseCakeContainer = document.createElement("div");
  chooseCakeContainer.id = "choose-cake-desert";
  chooseCakeContainer.className = "my-3 border-bottom pb-2";

  const noDesert = document.createElement("div");
  noDesert.id = "no-desert";
  noDesert.className = "my-3 border-bottom pb-2";

  const chooseCakeitems = document.createElement("div");
  chooseCakeitems.id = "choose-cake-desert-container";

  // Create radio buttons for the menu options
  let showDefaultDesertMenu = false;
  dessertMenuItems.menu.forEach((menuItem, index) => {
    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.id = "menu-option-" + index;
    radioButton.name = "menu-option";
    radioButton.value = menuItem;

    const label = document.createElement("label");
    label.setAttribute("for", "menu-option-" + index);
    label.textContent = menuItem;

    if (index == 0) {
      radioButton.setAttribute("checked", true);
      showDefaultDesertMenu = true;

      optionLabelcontainer.appendChild(radioButton);
      optionLabelcontainer.appendChild(label);

      chooseTwoContainer.appendChild(optionLabelcontainer);
      chooseTwoContainer.appendChild(chooseTwoitems);
    }

    if (index == 1) {
      showDefaultDesertMenu = false;

      optionLabelcontainer2.appendChild(radioButton);
      optionLabelcontainer2.appendChild(label);
      noDesert.appendChild(optionLabelcontainer2);

      //noDesert.appendChild(chooseCakeitems);
    }

    if (index == 2) {
      showDefaultDesertMenu = false;

      optionLabelcontainer1.appendChild(radioButton);
      optionLabelcontainer1.appendChild(label);

      chooseCakeContainer.appendChild(optionLabelcontainer1);
      //chooseCakeContainer.appendChild(chooseCakeitems);
    }

    extraItemCol2.appendChild(chooseTwoContainer);

    extraItemCol2.appendChild(noDesert);

    extraItemCol2.appendChild(chooseCakeContainer);

    // extraItemCol2.appendChild(document.createElement("br"));
  });

  const radioOptionContainer = document.createElement("div");
  radioOptionContainer.id = "radioOptionContainer";

  // const optionWrapper = document.querySelector("#radioOptionContainer");
  extraItemCol2.appendChild(radioOptionContainer);

  // Add event listener to radio buttons
  const radioButtons = document.querySelectorAll('input[name="menu-option"]');

  let deraultShow = document.getElementById("choose-two-desert-container");
  appendToRight = "";
  if (deraultShow) {
    cakeFees = dessertMenuItems.price[0];
    dessertMenuItems.menuOptions[0].forEach((firstItem, index) => {
      barMenuItems(
        "checkbox",
        chooseTwoitems,
        "desert-option-menu",
        firstItem,
        3,
        index // Use index 0 to load only the default option
      );
    }); // Get the default option
  }

  radioButtons.forEach((radioButton, index) => {
    radioButton.addEventListener("change", (event) => {
      deraultShow.textContent = "";

      radioOptionContainer.textContent = "";
      const selectedMenu = event.target.value;
      console.log("Selected Menu:", index + selectedMenu);
      appendToRight.textContent = "";

      cakeFees = dessertMenuItems.price[index];

      console.log(
        radioButton.value +
          "---:" +
          index +
          "Price $" +
          cakeFees +
          "$RADKO BUTTON FOR WRAP INDEX MENUS"
      );

      if (radioButton.value == "Dessert") {
        appendToRight.textContent = "";
        appendToRight = chooseTwoitems;
      } else if (radioButton.value == "Bring Your Own Cake") {
        appendToRight.textContent = "";
        appendToRight = chooseCakeitems;
      } else {
      }

      selectedDesertOptions = selectedMenu;

      dessertMenuItems.menuOptions[index].forEach((menuItems, index) => {
        barMenuItems(
          "checkbox",
          appendToRight,
          "desert-option-menu",
          menuItems,
          menuItems,
          index
        );
      });
    });
  });

  // CHOOSE BAR OPTION
  let barOption = document.querySelectorAll('[name="barOptions"]');

  let desertOptions;

  barOption.forEach((barChoice) => {
    barChoice.addEventListener("change", function () {
      if (this.checked) {
        // console.log(this.value);
        // console.log(this.getAttribute("data-labeltext"));
        barOptionSelectedName = this.getAttribute("data-labeltext");
        if (this.value != Number(125)) {
          barOptionSelectedPrice = this.value * elementPeopleCount.value;
        } else {
          barOptionSelectedPrice = this.value;
        }
        console.log(barOptionSelectedPrice + "Price valuesss");
      }
    });
  });

  // CHOOSE MENU OPTION
  let menuOptions = document.querySelectorAll('[name="menu-option"]');

  selectedDesertOptions = menuOptions[0].value;

  menuOptions.forEach((menuChoice) => {
    // console.log(menuChoice);
    //menuChoice[0].checked = true;

    let increase = 0;
    if (menuChoice.value == "Dessert") {
      getDesertChoice = [];
      desertOptions = document.querySelectorAll('[name="desert-option-menu"]');
      desertOptions.forEach((desertChoice) => {
        // desertChoice[0].checked = true;

        desertChoice.addEventListener("change", function () {
          if (this.checked) {
            increase++;
            if (increase > 2) {
              alert("Can't select more then 2 items");
              this.checked = false;
              increase--;
            }
            console.log(this.getAttribute("data-labeltext"));

            getDesertChoice.push(this.getAttribute("data-labeltext"));
          } else {
            increase--; // Decrease by 1 if unchecked
          }
          console.log(increase + "INCREASED");
        });
      });
    }

    menuChoice.addEventListener("change", function () {
      increase = 0;
      if (this.checked) {
        if (this.value == "Dessert") {
          getDesertChoice = [];
          desertOptions = document.querySelectorAll(
            '[name="desert-option-menu"]'
          );
          desertOptions.forEach((desertChoice) => {
            //  desertOptionsp[0].checked;

            desertChoice.addEventListener("change", function () {
              if (this.checked) {
                increase++;
                if (increase > 2) {
                  alert("Can't select more then 2 items");
                  increase--;
                  this.checked = false;
                }

                console.log(this.getAttribute("data-labeltext"));

                getDesertChoice.push(this.getAttribute("data-labeltext"));
              } else {
                increase--; // Decrease by 1 if unchecked
              }

              console.log(increase + "INCREASED");
            });
          });
        } else {
          getDesertChoice = [];

          selectedDesertOptionsPrice = 3;

          desertOptions = document.querySelectorAll(
            '[name="desert-option-menu"]'
          );

          desertOptions.forEach((desertChoice) => {
            //  desertOptionsp[0].checked;

            desertChoice.addEventListener("change", function () {
              if (this.checked) {
                increase++;

                // if (increase > 2) {
                //   alert("Cant select more then two options");
                //   this.checked = false;
                // }
                console.log(this.getAttribute("data-labeltext"));

                getDesertChoice.push(this.getAttribute("data-labeltext"));
              }
            });
          });
        }
      }
    });
  });

  const messageWrapper = document.createElement("div");

  messageWrapper.className = "message";

  extraItemCol3.appendChild(messageWrapper);

  message.forEach((message) => {
    const messageP = document.createElement("p");
    messageP.className = "message_txt";
    messageP.innerHTML = message;
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
      // console.log(menu);
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
                  selectedItem--;
                }
                //  console.log(this.value);
                //  console.log(this.parentNode);
              } else {
                selectedItem--;
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

let depositeAmount = 0;
let roomRental = 0;
let roomIndex;

function mainEngine(getIndex) {
  elementTitle.textContent = rooms[getIndex].title;

  roomName = elementTitle.textContent;

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
  for (let intPeople = 12; intPeople <= getPeopleCount; intPeople++) {
    createPeopleCountList(intPeople);
  }

  depositeAmount = rooms[getIndex].deposite();

  const roommm = document.querySelectorAll(".roomMessageList");

  roommm.forEach((element, i) => {
    if (element.getAttribute("data-price") == depositeAmount) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });

  //createDepositeMessage[getIndex].className = "active";

  roomRental = rooms[getIndex].roomRental();
  roomIndex = getIndex;

  //elementRoomRental.textContent = "Room Rentalss: " + roomRental;

  // Menu Selection

  menuWrapper.innerHTML = "";

  rooms[getIndex].menuSelection.call(rooms[getIndex]).forEach((menu, index) => {
    // create check/radiobox

    // rooms[getIndex].test.call(rooms[getIndex]);

    console.log(selectedDay + "selectedDay");

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
      selectSelectionMenu.textContent = menuMessage[index];
      checkOption.setAttribute("checked", true);
      console.log(checkOption.value + " Loading Menu");
      if (checkOption.value == "Lunch") {
        currentMenu = "lunch";
        loadPageIntoParent("menu.html");
      }
    }

    if (menu === "VIP Treat") {
      selectSelectionMenu.textContent = "";
      menuWrapper.classList.add("flex-column");
      const message = document.querySelector("#message");
      elementMenuMessage.textContent = "    ";
      message.textContent = ` VIP menu and beverage cost will be decided when you meet with the Catering Director and Chef. This price is not included on this quote. `;

      const vipContainer = document.createElement("div");

      vipContainer.style.display = "flex";

      vipContainer.id = "vip-container";

      menuWrapper.appendChild(vipContainer);

      menuWrapper.style.display = "flex";

      rooms[getIndex].menuPackages
        .call(rooms[getIndex])
        .forEach((menu, index) => {
          createInput(
            "input",
            "radio",
            "form-check-input",
            "menu-selection-vip",
            menu,
            index,
            "message",
            vipContainer
          );
        });
      const checkboxes = document.querySelectorAll(
        'input[name="menu-selection-vip"]'
      );

      checkboxes[index].checked = true;

      checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
          if (this.checked) {
            const value = this.value;
            VipHideMenuItems = true;
            currentMenu = value;
          }
        });
      });
    } else {
      menuWrapper.classList.remove("flex-column");
    }
  });
  //if checked load menu via ajax
  const menuSelection = document.querySelectorAll('[name="menu-selection"]');

  const loadingOption = document.getElementById("content");
  loadingOption.textContent = "";
  content.textContent = "";

  menuSelection.forEach((menuOption, i) => {
    menuOption.addEventListener("change", function () {
      if (this.checked) {
        console.log(this.value + " Loading Menu");

        selectSelectionMenu.textContent = menuMessage[i];

        if (this.value == "Lunch") {
          currentMenu = "lunch";
          VipHideMenuItems = false;
          loadPageIntoParent("menu.html");
        } else {
          currentMenu = "dinner";
          VipHideMenuItems = false;
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
  //rooms[roomindex].menuSelection = [menu[0]];

  console.log(rooms[roomindex].menuSelection);
  console.log(" IT IS POSSIBLE TO ADD CODE HERE ");

  rooms[roomindex].day = day;
  //console.log(rooms[roomIndex].deposite());

  depositeAmount = rooms[roomindex].deposite();
  roomRental = rooms[roomIndex].roomRental();

  console.log(createDepositeMessage[day] + "Add active class here");

  console.log(rooms[roomindex].menuSelection + "Room INEDX");

  const roommm = document.querySelectorAll(".roomMessageList");

  roommm.forEach((element, i) => {
    if (element.getAttribute("data-price") == depositeAmount) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });

  // if (depositeAmount == getDepositeMessage[roomindex]) {
  //   createDepositeMessage.className = "active";
  // }
}

console.log("On Load:", getFullDate);

$(function () {
  $("#datepicker-container").datepicker({
    minDate: 0,
    // dateFormat: "mm-dd-yy",

    onSelect: function (dateText) {
      // Get the day

      currentSelectedDate = new Date(dateText).toLocaleDateString("en-US");

      let selectedDate = new Date(dateText);
      let dayIndex = selectedDate.getDay();
      let getDay = days[dayIndex];
      mainEngine(roomIndex);
      dayName = getDay;
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

// checkbox

const termsPolicy = document.querySelector("#terms-policy");
const accordionExample = document.querySelector("#accordionExample");

termsPolicy.addEventListener("change", function () {
  if (this.checked) {
    accordionExample.classList.add("d-none");
  } else {
    accordionExample.classList.remove("d-none");
  }
});
