// projects database
let projectsDB = [
  {
    id: 1,
    img: "./img/projects/project1/project1-10.jpeg",
    caption: "Project 1",
  },
  {
    id: 2,
    img: "./img/projects/project2/project2-14.jpeg",
    caption: "Project 2",
  },
  {
    id: 3,
    img: "./img/projects/project3/project3-10.jpeg",
    caption: "Project 3",
  },
  {
    id: 4,
    img: "./img/projects/project4/project4-4.jpeg",
    caption: "Project 4",
  },
  {
    id: 5,
    img: "./img/projects/project5/project5-14.jpeg",
    caption: "Project 5",
  },
  {
    id: 6,
    img: "./img/projects/project6/project6-4.jpeg",
    caption: "Project 6",
  },
  {
    id: 7,
    img: "./img/projects/project7/project7-9.jpeg",
    caption: "Project 7",
  },
  {
    id: 8,
    img: "./img/projects/project8/project8-4.jpeg",
    caption: "Project 8",
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
