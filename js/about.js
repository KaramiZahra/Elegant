// members database
let memebersDB = [
  {
    id: 1,
    name: "Zahra Karami",
    position: "Founder",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, libero voluptatum itaque impedit, nam fugit mollitia error voluptates laudantium quam odio numquam et neque quisquam culpa amet iusto atque commodi.",
    img: "./img/about:members/member1.jpeg",
  },
  {
    id: 2,
    name: "Matt LeBlanc",
    position: "Co-Founder",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, libero voluptatum itaque impedit, nam fugit mollitia error voluptates laudantium quam odio numquam et neque quisquam culpa amet iusto atque commodi.",
    img: "./img/about:members/member2.jpeg",
  },
  {
    id: 3,
    name: "Matthew Perry",
    position: "CEO",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, libero voluptatum itaque impedit, nam fugit mollitia error voluptates laudantium quam odio numquam et neque quisquam culpa amet iusto atque commodi.",
    img: "./img/about:members/member3.jpeg",
  },
  {
    id: 4,
    name: "Courteney Cox",
    position: "Fullstack Developer",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, libero voluptatum itaque impedit, nam fugit mollitia error voluptates laudantium quam odio numquam et neque quisquam culpa amet iusto atque commodi.",
    img: "./img/about:members/member4.jpeg",
  },
  {
    id: 5,
    name: "David Schwimmer",
    position: "Designer",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, libero voluptatum itaque impedit, nam fugit mollitia error voluptates laudantium quam odio numquam et neque quisquam culpa amet iusto atque commodi.",
    img: "./img/about:members/member5.jpeg",
  },
  {
    id: 6,
    name: "Jennifer Aniston",
    position: "Consultant",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, libero voluptatum itaque impedit, nam fugit mollitia error voluptates laudantium quam odio numquam et neque quisquam culpa amet iusto atque commodi.",
    img: "./img/about:members/member6.jpeg",
  },
];
let membersContainer = document.querySelector(".team-members");

// create and insert member profiles into the DOM based on the provided 'members' data
function createMember(members) {
  members.forEach((member) => {
    membersContainer.insertAdjacentHTML(
      "beforeend",
      '<div class="member md:flex-col" data-member-id="1"><div class="md:bg-gray-100 md:w-full md:rounded-full md:flex md:items-center md:mb-7"><img class="member-img w-72 h-40 rounded-[50%] md:w-20 md:h-20" src="' +
        member.img +
        '"><div class="hidden md:block md:pl-9"><div class="md:text-[#5f5f5f]">' +
        member.name +
        '</div><p class="md:text-[#808080]">' +
        member.position +
        '</p></div></div><div class="member-detail pl-12 md:pl-5"><p class="member-name md:hidden">' +
        member.name +
        '</p><p class="member-position md:hidden">' +
        member.position +
        '</p><p class="member-desc">' +
        member.desc +
        "</p></div></div>"
    );
  });
}
createMember(memebersDB);
