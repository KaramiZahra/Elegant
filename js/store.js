let storeDB = [
  {
    id: 1,
    img: "./img/store/bed/bed6.jpeg",
    tag: "Bed",
  },
  {
    id: 2,
    img: "./img/store/chair/chair8.jpeg",
    tag: "Chair",
  },
  {
    id: 3,
    img: "./img/store/decor/decor6.jpeg",
    tag: "Decor",
  },
  {
    id: 4,
    img: "./img/store/lamp/lamp14.jpeg",
    tag: "Lamp",
  },
  {
    id: 5,
    img: "./img/store/sofa/sofa2.jpeg",
    tag: "Sofa",
  },
  {
    id: 6,
    img: "./img/store/table/table4.jpeg",
    tag: "Table",
  },
];
let storeContainer = document.querySelector(".store-container");
// create and insert items into the DOM
function createStore(store) {
  store.forEach((items) => {
    storeContainer.insertAdjacentHTML(
      "beforeend",
      '<a href="storeItems.html?id=' +
        items.id +
        '" class="store-items"><img src="' +
        items.img +
        '"><h2>' +
        items.tag +
        '</h2><div class="overlay"></div></a>'
    );
  });
}
createStore(storeDB);
