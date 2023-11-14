// honors database
let honorsDB = [
  {
    year: "2023",
    desc: "HGTV Designer of the Year Nominee - Color + Pattern / HGTV Designer of the Year Nominee - Countryside Escapes / A-List Winner - Best Dining Room / A-List Nominee - Bedroom / A-List Nominee - Renovation / A-List Nominee - Kid/Teen Bedroom",
  },
  {
    year: "2022",
    desc: "Luxe Red Award - Regional Winner - Best Use Of Color / CTC&G IDA - Finalist in Pool House / A-List Nominee - Pool House / A-List Nominee - Kitchen Design / A-List Nominee - Kid/Teen Bedroom / A-List Nominee - Living Space / A-List Nominee - Play",
  },
  {
    year: "2021",
    desc: "A-List Award Winner - Best Pool House / A-List Finalist - Kid/Teen Bedroom / A-List Finalist - Kitchen Design  / Serendipity Design Innovator Award - D2 Interieurs Playful Kids Suite",
  },
  {
    year: "2020",
    desc: "Luxe Red Awards - National Winner in Restoration or Renovation",
  },
  {
    year: "2019",
    desc: "Serendipity Design Innovator Award - Winner Most Effective Design Detail / CTC&G IDA - Winner in the Best Interior Design Category / CTC&G IDA - Finalist in the Master Bathroom Category / athome Magazine - A-List Awards - Winner for Best Entryway / athome Magazine - A-List Awards - Finalist for Transitional Modern Bedroom / athome Magazine - A-List Awards - Finalist for Kid's Bedroom",
  },
  {
    year: "2018",
    desc: "CTC&G IDA - Winner in Best Interior Design / CTC&G IDA - Award Nomination in Interior Design",
  },
  {
    year: "2017",
    desc: "CTC&G IDA - Second Place in the Best Interior Design Category / athome Magazine A-List Awards - Winner for Kids' Playspace",
  },
  {
    year: "2016",
    desc: "CTC&G IDA - Second Place in Small Spaces",
  },
];
let honorsContainer = document.querySelector(".honors");

// create and insert honors into the DOM based on the provided 'honors' data
function createHonor(honors) {
  honors.forEach((honor) => {
    honorsContainer.insertAdjacentHTML(
      "beforeend",
      '<div class="honor"><h1 class="title">' +
        honor.year +
        "</h1><p>" +
        honor.desc +
        "</p></div>"
    );
  });
}
createHonor(honorsDB);

///////////////////////////// PRESS ////////////////////////////

// press database
let pressDB = [
  {
    id: 1,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press1.png",
  },
  {
    id: 2,
    link: "https://www.cottagesgardens.com",
    img: "./img/honors/press/press2.png",
  },
  {
    id: 3,
    link: "https://www.cottagesgardens.com",
    img: "./img/honors/press/press3.png",
  },
  {
    id: 4,
    link: "https://www.cottagesgardens.com",
    img: "./img/honors/press/press4.png",
  },
  {
    id: 5,
    link: "https://www.hgtv.com",
    img: "./img/honors/press/press5.png",
  },
  {
    id: 6,
    link: "https://www.hgtv.com",
    img: "./img/honors/press/press6.jpg",
  },
  {
    id: 7,
    link: "https://www.cottagesgardens.com",
    img: "./img/honors/press/press7.jpg",
  },
  {
    id: 8,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press8.jpg",
  },
  {
    id: 9,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press9.png",
  },
  {
    id: 10,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press10.png",
  },
  {
    id: 11,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press11.png",
  },
  {
    id: 12,
    link: "https://www.cottagesgardens.com",
    img: "./img/honors/press/press12.png",
  },
  {
    id: 13,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press13.png",
  },
  {
    id: 14,
    link: "https://www.hgtv.com",
    img: "./img/honors/press/press14.png",
  },
  {
    id: 15,
    link: "https://www.hgtv.com",
    img: "./img/honors/press/press15.png",
  },
  {
    id: 16,
    link: "https://www.hgtv.com",
    img: "./img/honors/press/press16.png",
  },
  {
    id: 17,
    link: "https://www.hgtv.com",
    img: "./img/honors/press/press17.png",
  },
  {
    id: 18,
    link: "https://www.hgtv.com",
    img: "./img/honors/press/press18.jpg",
  },
  {
    id: 19,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press19.jpg",
  },
  {
    id: 20,
    link: "https://www.cottagesgardens.com",
    img: "./img/honors/press/press20.jpg",
  },
  {
    id: 21,
    link: "https://www.cottagesgardens.com",
    img: "./img/honors/press/press21.png",
  },
  {
    id: 22,
    link: "https://www.hgtv.com",
    img: "./img/honors/press/press22.jpg",
  },
  {
    id: 23,
    link: "https://www.hgtv.com",
    img: "./img/honors/press/press23.jpg",
  },
  {
    id: 24,
    link: "https://www.hgtv.com",
    img: "./img/honors/press/press24.jpg",
  },
  {
    id: 25,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press25.png",
  },
  {
    id: 26,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press26.png",
  },
  {
    id: 27,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press27.png",
  },
  {
    id: 28,
    link: "https://www.hgtv.com",
    img: "./img/honors/press/press28.png",
  },
  {
    id: 29,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press29.png",
  },
  {
    id: 30,
    link: "https://www.cottagesgardens.com",
    img: "./img/honors/press/press30.png",
  },
  {
    id: 31,
    link: "https://www.cottagesgardens.com",
    img: "./img/honors/press/press31.png",
  },
  {
    id: 32,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press32.png",
  },
  {
    id: 33,
    link: "https://www.cottagesgardens.com",
    img: "./img/honors/press/press33.png",
  },
  {
    id: 34,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press34.png",
  },
  {
    id: 35,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press35.png",
  },
  {
    id: 36,
    link: "https://www.hgtv.com",
    img: "./img/honors/press/press36.png",
  },
  {
    id: 37,
    link: "https://www.hgtv.com",
    img: "./img/honors/press/press37.png",
  },
  {
    id: 38,
    link: "https://www.cottagesgardens.com",
    img: "./img/honors/press/press38.png",
  },
  {
    id: 39,
    link: "https://www.cottagesgardens.com",
    img: "./img/honors/press/press39.png",
  },
  {
    id: 40,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press40.png",
  },
  {
    id: 41,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press41.png",
  },
  {
    id: 42,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press42.png",
  },
  {
    id: 43,
    link: "https://www.hgtv.com",
    img: "./img/honors/press/press43.png",
  },
  {
    id: 44,
    link: "https://www.cottagesgardens.com",
    img: "./img/honors/press/press44.png",
  },
  {
    id: 45,
    link: "https://www.cottagesgardens.com",
    img: "./img/honors/press/press45.png",
  },
  {
    id: 46,
    link: "https://www.hgtv.com",
    img: "./img/honors/press/press46.png",
  },
  {
    id: 47,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press47.png",
  },
  {
    id: 48,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press48.png",
  },
  {
    id: 49,
    link: "https://www.hgtv.com",
    img: "./img/honors/press/press49.png",
  },
  {
    id: 50,
    link: "https://www.hgtv.com",
    img: "./img/honors/press/press50.png",
  },
  {
    id: 51,
    link: "https://www.hgtv.com",
    img: "./img/honors/press/press51.png",
  },
  {
    id: 52,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press52.png",
  },
  {
    id: 53,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press53.png",
  },
  {
    id: 54,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press54.png",
  },
  {
    id: 55,
    link: "https://www.cottagesgardens.com",
    img: "./img/honors/press/press55.png",
  },
  {
    id: 56,
    link: "https://www.cottagesgardens.com",
    img: "./img/honors/press/press56.png",
  },
  {
    id: 57,
    link: "https://www.cottagesgardens.com",
    img: "./img/honors/press/press57.png",
  },
  {
    id: 58,
    link: "https://www.cottagesgardens.com",
    img: "./img/honors/press/press58.png",
  },
  {
    id: 59,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press59.png",
  },
  {
    id: 60,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press60.png",
  },
  {
    id: 61,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press61.png",
  },
  {
    id: 62,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press62.png",
  },
  {
    id: 63,
    link: "https://westchestermagazine.com",
    img: "./img/honors/press/press63.png",
  },
  {
    id: 64,
    link: "https://www.cottagesgardens.com",
    img: "./img/honors/press/press64.png",
  },
  {
    id: 65,
    link: "https://www.cottagesgardens.com",
    img: "./img/honors/press/press65.jpg",
  },
  {
    id: 66,
    link: "https://www.cottagesgardens.com",
    img: "./img/honors/press/press66.png",
  },
  {
    id: 67,
    link: "https://www.hgtv.com",
    img: "./img/honors/press/press67.png",
  },
];
let pressContainer = document.querySelector(".press-container");

// create and insert presses into the DOM based on the provided 'honors' data
function createPress(presses) {
  presses.forEach((press) => {
    pressContainer.insertAdjacentHTML(
      "beforeend",
      '<a href="' + press.link + '"><img src="' + press.img + '"></a>'
    );
  });
}
createPress(pressDB);
