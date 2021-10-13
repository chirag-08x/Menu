const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    price: 15.99,
    category: "breakfast",
    img: "./images/item-1.jpeg",
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 2,
    title: "diner double",
    price: 13.99,
    category: "lunch",
    img: "./images/item-2.jpeg",
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    id: 3,
    title: "godzilla milkshake",
    price: 6.99,
    category: "shakes",
    img: "./images/item-3.jpeg",
    desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
  },
  {
    id: 4,
    title: "country delight",
    price: 20.99,
    category: "breakfast",
    img: "./images/item-4.jpeg",
    desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
  },
  {
    id: 5,
    title: "egg attack",
    price: 22.99,
    category: "lunch",
    img: "./images/item-5.jpeg",
    desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
  },
  {
    id: 6,
    title: "oreo dream",
    price: 18.99,
    category: "shakes",
    img: "./images/item-6.jpeg",
    desc: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
  },
  {
    id: 7,
    title: "bacon overflow",
    price: 8.99,
    category: "breakfast",
    img: "./images/item-7.jpeg",
    desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
  },
  {
    id: 8,
    title: "american classic",
    price: 12.99,
    category: "lunch",
    img: "./images/item-8.jpeg",
    desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
  },
  {
    id: 9,
    title: "quarantine buddy",
    price: 16.99,
    category: "shakes",
    img: "./images/item-9.jpeg",
    desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
  },
  {
    id: 10,
    title: "steak dinner",
    price: 39.99,
    category: "dinner",
    img: "./images/item-10.jpeg",
    desc: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
  },
];

const mainCenter = document.querySelector(".main-center");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons(menu);
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<div class = item ${item.category}>
              <div class="item-img">
                <img src=${item.img} alt=${item.title} class="photo"/>
              </div>
              <div class="info">
                <div class="description">
                  <h4 class="item-name">${item.title}</h4>
                  <h4 class="price">$${item.price}</h4>
                </div>
                <p class="about">
                  ${item.desc}
                </p>
              </div>
            </div>`;
  });
  displayMenu = displayMenu.join("");
  mainCenter.innerHTML = displayMenu;
  // console.log(displayMenu);
}

// Adding Buttons non-dynamically
// const btns = document.querySelectorAll(".btn");
// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     if (e.currentTarget.dataset.id === "all") {
//       displayMenuItems(menu);
//     } else {
//       let filteredItem = menu.filter(function (item) {
//         // dataset.name should match with dataset.name from HTML
//         if (item.category === e.currentTarget.dataset.id) {
//           return item;
//         }
//       });
//       displayMenuItems(filteredItem);
//     }
//   });
// });

// Adding buttons dynamically;
function displayMenuButtons(menuItems) {
  const uniqueCategories = menuItems.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  let allButtons = uniqueCategories.map(function (item) {
    return `<button class="btn" data-id=${item}>${item}</button>`;
  });
  allButtons = allButtons.join("");
  const buttonContainer = document.querySelector(".butns");
  buttonContainer.innerHTML = allButtons;

  const btns = document.querySelectorAll(".btn");
  btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      if (e.currentTarget.dataset.id === "all") {
        displayMenuItems(menu);
      } else {
        let filteredItem = menu.filter(function (item) {
          // dataset.name should match with dataset.name from HTML
          if (item.category === e.currentTarget.dataset.id) {
            return item;
          }
        });
        displayMenuItems(filteredItem);
      }
    });
  });
}

console.log();
