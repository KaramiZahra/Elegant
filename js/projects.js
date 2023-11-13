// projects database
let projectsDB = [
  {
    id: 1,
    img: "./img/projects/project1/project1-10.jpeg",
    caption: "TONAL SINGLE FAMILY HOME",
  },
  {
    id: 2,
    img: "./img/projects/project2/project2-14.jpeg",
    caption: "SARATOGA WHIMSY HOUSE",
  },
  {
    id: 3,
    img: "./img/projects/project3/project3-10.jpeg",
    caption: "POTRERO HILL HOUSE & STUDIO",
  },
  {
    id: 4,
    img: "./img/projects/project4/project4-4.jpeg",
    caption: "PALO ALTO MULTI-GENERATIONAL HOME",
  },
  {
    id: 5,
    img: "./img/projects/project5/project5-14.jpeg",
    caption: "CAMPBELL MODERN HOME",
  },
  {
    id: 6,
    img: "./img/projects/project6/project6-4.jpeg",
    caption: "PACIFIC NORTHWEST PRIMARY",
  },
  {
    id: 7,
    img: "./img/projects/project7/project7-9.jpeg",
    caption: "EARTHY MACKAY HOUSE",
  },
  {
    id: 8,
    img: "./img/projects/project8/project8-4.jpeg",
    caption: "AUSTRALIAN MINIMALIST GROUND UP",
  },
];
let projectsContainer = document.querySelector(".projects-container");

// create and insert projects into the DOM based on the provided 'projects' data
function createProjects(projects) {
  projects.forEach((project) => {
    projectsContainer.insertAdjacentHTML(
      "beforeend",
      '<div class="project"><a href="projectDetail.html?id=' +
        project.id +
        '"><img src="' +
        project.img +
        '"><p>' +
        project.caption +
        "</p></a></div>"
    );
  });
}
createProjects(projectsDB);
