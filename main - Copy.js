// Pineville Tavern Rservaton System
// Software Version - V0.0
// https://www.pinevilletavern.com/

// Events
const events = [
  "Wedding",
  "Rehearsal Dinner",
  "Bridal Shower",
  "Baby Shower",
  "Anniversary	Birthday",
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

const selectedDay = days[1];

// Deposite
const deposite = [200, 400, 1500];
const roomRentalFees = [200, 400, 6000];

//menu selection
const menu = ["Lunch", "Dinner", "VIP Treat"];

//Bar Selection
const barSelection = {
  bar: ["Consumption Bar", "Cash Bar"],
  barPrice: [125, 125],
};

const dessertMenu = 3; //$3

// Cake Cutting Fee

const cakeCutting = {};

const reservationTitle = ["1742 Room", "Mural Room", "The Garden"];

//Rooms 1. Pineville Tavern, 2. Mural Room, 3. The Garden
const pinevilleRoom = {
  title: reservationTitle[0],
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
  barOptions: barSelection.bar[0],
  barOptionsPrice: barSelection.barPrice[0],
  // barOptionsPrice: barSelection.barPrice[0],

  // cakeCuttinFees: dessertMenu * getPeopleCount,
};

console.log(pinevilleRoom.barOptions + " " + pinevilleRoom.barOptionsPrice);

const muralRoom = {
  title: reservationTitle[1],
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
};

const theGarden = {
  title: reservationTitle[2],
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
const selectMenu = document.querySelectorAll('[name="menu-selection"]');

function mainEngine(getIndex) {
  elementTitle.textContent = rooms[getIndex].title;

  getPeopleCount = rooms[getIndex].people;

  elementMaxPeople.textContent = getPeopleCount;

  elementPeopleCount.innerHTML = "";
  elementMenuMessage.textContent = "Select Lunch or Dinner";
  function createPeopleCountList(optionContent) {
    numberOfPeople = document.createElement("option");
    numberOfPeople.textContent = optionContent;
    elementPeopleCount.appendChild(numberOfPeople);
  }

  createPeopleCountList("Select People");

  for (let intPeople = 0; intPeople <= getPeopleCount; intPeople++) {
    createPeopleCountList(intPeople);
  }

  const deposite = rooms[getIndex].deposite();
  elementDepositeDue.textContent = "Deposit Due: " + deposite;

  const roomRental = rooms[getIndex].roomRental();

  elementRoomRental.textContent = "Room Rental: " + roomRental;

  // Menu Selection

  menuWrapper.innerHTML = "";

  rooms[getIndex].menuSelection.forEach((menu, index) => {
    // create check/radiobox
    let checkOption = document.createElement("input");
    checkOption.type = "radio";
    checkOption.className = "form-check-input";
    checkOption.name = "menu-selection";
    checkOption.id = menu.toLowerCase();
    checkOption.value = menu;

    if (index === 0) {
      checkOption.setAttribute("checked", true);
      console.log(checkOption.value + " Loading Menu");
    }

    // create label
    let radioLabel = document.createElement("label");
    radioLabel.setAttribute("for", checkOption.id);
    radioLabel.textContent = checkOption.value;
    radioLabel.id = "message";
    radioLabel.className = "form-check-label";

    // add to wrapper
    menuWrapper.appendChild(checkOption);
    menuWrapper.append(radioLabel);

    if (menu === "VIP Treat") {
      const message = document.querySelector("#message");
      elementMenuMessage.textContent = menu;
      message.textContent = `VIP personal meeting with the Chef and The Pineville Tavern team to plan your custom menu `;
    }
  });
  //if checked load menu via ajax
  const menuSelection = document.querySelectorAll('[name="menu-selection"]');

  menuSelection.forEach((menuOption) => {
    menuOption.addEventListener("change", function () {
      if (this.checked) {
        console.log(this.value + " Loading Menu");
      }
    });
  });
}

rooms.forEach((title, index) => {
  let items = document.createElement("li");
  items.setAttribute("data-link", title.title);
  items.setAttribute("data-index", title.title);

  console.log(items.getAttribute("data-link"));

  items.className = "list-group-item room-items";

  items.textContent = title.title;

  elementReservationTitle.appendChild(items);

  // add main engine
  function handleClick() {
    this.classList.add("active");
    mainEngine(index);
  }

  items.addEventListener("click", handleClick);
});

mainEngine(0);
