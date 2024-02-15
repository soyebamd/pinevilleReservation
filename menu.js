// Lunch

const firstCourseMenu = [
  "Soup of the day",
  "Snapper soup",
  "Mixed green salad",
  "Caesar salad",
  "Appetizer Cheese Ravioli",
  "Appetizer Size Ravioli",
];
const mainCourseMenu = [
  "Tavern Burger steak fries", // item1
  "Cheesesteak american cheese-steak fries", // item2
  "Cheese Ravioli Marinara 1/2 portion", // item3
  "Penne, Cream, Peas & Proscuitto 1/2 portion", // item4
  "Wedge Salad", // item5
  "Roast Beet Salad", // item6
  "Million $ Bacon Burger steak fries", // item7
  "French Dip Sandwich steak fries", // item8
  "Nashville Hot Chicken Sandwich steak fries", // item9
  "Spaghetti alla Vongole 1/2 portion", // item10
  "Roast Pork Sandwich long hots-broccoli rabe-steak fries", // item11
  "Cobb Salad", // item12
  "Crab Cake Sandwich tartar sauce-steak fries", // item13
  "Prime Rib French Dip au jus-steak fries", // item14
  "General Tso's Chicken Salad broccoli-mandarin oranges-avocado honey sesame vinaigrette", // item15
  "Kung Pao Cauliflower Tacos orange jam-peanuts-scallion", // item16
  "Chicken Parmigiana spaghetti marinara", // item17
  "Cacio e Pepe full portion", // item18
  "Fried Chicken whipped potatoes-coleslaw", // item19
  "Bawlmer Crab Cake (1) steak fries-coleslaw", // item20
  "Eggplant Napoleon breaded & fried-ricotta-marinara", // item21
  "BBQ Ribs (1/2 rack) steak fries-coleslaw", // item22
  "Lobster Mac 'N Cheese 1/2 portion", // item23
  "Kung Pao Cauliflower Tacos orange jam-scallions-peanuts", // item24
  "Spaghetti alla Vongole full portion", // item25
  "Bone In Pork Chop braised red cabbage-whipped potatoes-pear & bacon jam", // item26
  "Steak Frites 10oz sirloin-shoe string fries-red wine shallot sauce", // item27
  "Seared Salmon goat cheese whipped potatoes-cauliflower-golden raisin romesco", // item28
  "Roasted Chicken yukon & sweet potatoes-peas-mushroom gravy", // item29
  "14oz NY Strip Steak creamed spinach-whipped potatoes", // item30
  "BBQ Ribs (full rack) steak fries-coleslaw", // item31
  "Cheese Ravioli & Meatballs full portion", // item32
  "16 oz Prime Rib whipped potatoes-chef's vegetables", // item33
  "Pan Roasted Sea Bass red pepper confit-crab fondant-thai lime sauce", // item34
  "Bawlmer Crab Cakes (2) steak fries-coleslaw", // item35
  "Pan Roasted Sea Bass red pepper confit-crab fondant-thai chili lime sauce", // item36
  "9 oz Filet Mignon creamed spinach-whipped potatoes", // item37
  "Seared Salmon goat cheese whipped potatoes-golden raisin romesco", // item38
  "Seared Scallops butternut squash-fried broccoli-vanilla beurre blanc sauce", // item39
  "Lobster Mac 'N Cheese full portion", // item40
];

const [
  soupOfTheDay,
  snapperSoup,
  mixedGreenSalad,
  caesarSalad,
  appetizerCheeseRavioli,
  appetizerSizeRavioli,
] = firstCourseMenu;

const [
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
  item9,
  item10,
  item11,
  item12,
  item13,
  item14,
  item15,
  item16,
  item17,
  item18,
  item19,
  item20,
  item21,
  item22,
  item23,
  item24,
  item25,
  item26,
  item27,
  item28,
  item29,
  item30,
  item31,
  item32,
  item33,
  item34,
  item35,
  item36,
  item37,
  item38,
  item39,
  item40,
] = mainCourseMenu;

const packageMenu = {
  lunch: {
    title: ["LUNCH #1", "LUNCH #2", "LUNCH #3"],
    firstCourse: {
      subtitle: [
        "FIRST COURSE- CHOICE OF",
        "FIRST COURSE- CHOICE OF",
        "FIRST COURSE- CHOICE OF",
      ],
      itemOption: [
        "choose 2 to feature",
        "choose 2 to feature",
        "choose 2 to feature",
      ],
      maxSelection: [2, 2, 2],
      itemHiglighter: [
        "Unlimited Soft Drinks",
        "Unlimited Soft Drinks",
        "Unlimited Soft Drinks",
      ],
      lunch_0: [soupOfTheDay, snapperSoup, mixedGreenSalad, caesarSalad],
      lunch_1: [soupOfTheDay, snapperSoup, mixedGreenSalad, caesarSalad],
      lunch_2: [
        soupOfTheDay,
        snapperSoup,
        mixedGreenSalad,
        caesarSalad,
        appetizerSizeRavioli,
      ],
    },
    mainCourse: {
      subtitle: [
        "MAIN COURSE- CHOICE OF",
        "MAIN COURSE- CHOICE OF",
        "MAIN COURSE- CHOICE OF",
      ],
      itemOption: [
        "choose 4 to feature",
        "choose 4 to feature",
        "choose 4 to feature",
      ],
      maxSelection: [4, 4, 4],
      lunch_0: [item1, item2, item3, item4, item5, item6],
      lunch_1: [item7, item8, item9, item10, item11, item12],
      lunch_2: [item13, item14, item15, item16, item17, item18, item39, item29],

      itemHiglighter: [
        "Unlimited Soft Drinks",
        "Unlimited Soft Drinks",
        "Unlimited Soft Drinks",
      ],
    },
    price: [40, 45, 48],
  },

  dinner: {
    title: ["DINNER #1", "DINNER #2", "DINNER #3", "DINNER #4"],

    firstCourse: {
      subtitle: [
        "FIRST COURSE- CHOICE OF",
        "FIRST COURSE- CHOICE OF",
        "FIRST COURSE- CHOICE OF",
        "FIRST COURSE- CHOICE OF",
      ],
      itemOption: [
        "choose 2 to feature",
        "choose 2 to feature",
        "choose 3 to feature",
        "all featured",
      ],
      maxSelection: [2, 2, 3, -1],
      lunch_0: [soupOfTheDay, snapperSoup, mixedGreenSalad, caesarSalad],
      lunch_1: [soupOfTheDay, snapperSoup, mixedGreenSalad, caesarSalad],
      lunch_2: [
        soupOfTheDay,
        snapperSoup,
        mixedGreenSalad,
        caesarSalad,
        appetizerSizeRavioli,
      ],
      lunch_3: [
        soupOfTheDay,
        snapperSoup,
        mixedGreenSalad,
        caesarSalad,
        appetizerSizeRavioli,
      ],
      itemHiglighter: [
        "Unlimited Soft Drinks",
        "Unlimited Soft Drinks",
        "Unlimited Soft Drinks",
        "Unlimited Soft Drinks",
      ],
    },
    mainCourse: {
      subtitle: [
        "FIRST COURSE- CHOICE OF",
        "FIRST COURSE- CHOICE OF",
        "FIRST COURSE- CHOICE OF",
        "FIRST COURSE- CHOICE OF",
      ],
      itemOption: [
        "choose 4 to feature",
        "choose 4 to feature",
        "choose 4 to feature",
        "choose 5 to feature",
      ],
      maxSelection: [4, 4, 4, 5],
      lunch_0: [item1, item2, item3, item4, item5, item6],
      lunch_1: [item7, item8, item9, item10, item11, item12],
      lunch_2: [
        item13,
        item14,
        item15,
        item18,
        item30,
        item31,
        item32,
        item33,
        item34,
        item35,
      ],
      lunch_3: [item36, item37, item38, item40, item39, item29],
      itemHiglighter: [
        "Unlimited Soft Drinks",
        "Unlimited Soft Drinks",
        "Unlimited Soft Drinks",
        "Unlimited Soft Drinks",
      ],
    },
    price: [50, 55, 65, 70],
  },
};

barMenu = {
  title: [
    "House Wines & Domestic Beers",
    "Well Liquors, House Wines & Domestic Beers",
    "Mid-Shelf Liquor, House Wine, Domestic & Craft Beer",
    " Full Open Bar",
    "Consumptions Bar (billed per drink)",
    "Cash Bar (individuals pay at the bar)",
  ],
  price: [30, 35, 50, 60, 125, 125],
  qty: [
    "Priced Per Person",
    "Priced Per Person",
    "Priced Per Person",
    "Priced Per Person",
    "Flat Fees",
    "Flat Fees",
  ],
};

dessertMenuItems = {
  menu: ["Choose Two to feature", "Bring Your Own Cake"],
  menuOptions: [
    [
      "Chocolate Masaic Cake",
      "House-Made Rice Pudding",

      "Tiramisu",

      "NY Cheesecake",

      "Bassett's Ice Cream",

      "Carrot Cake",
    ],

    ["Bring Your Own Cake. $3 per person cutting fee"],
  ],

  qty: ["Priced Per Person", "Priced Per Person"],

  price: [10, 3],
};

message = [
  "Room Fee, Tax, Gratuity & Service Fees  not included in per person price.",
  "For more information or to book your event, please contact Katie at Katie@PinevilleTavern.co",
];
