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
