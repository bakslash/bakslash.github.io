// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Marcus",
  middleName: "",
  lastName: "Muasa",
  message: "full stack developer with a passion for creating innovative and cutting-edge solutions. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/bakslash",
    },

    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/marcus-muasa/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/marcus_thedev",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/pic.jpg"),
  imageSize: 375,
  message:
    "My name is Marcua. I’m a  experienced full stack developer with a passion for creating innovative and cutting-edge business solutions. With a strong expertise in front-end and back-end technologies, I specialize in building reliable and user-friendly systems that exceed expectations.",
  resume: "https://resume.io/r/1F0SGhu1c",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "bakslash", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
// const leadership = {
//   show: false,
//   heading: "Leadership",
//   message:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
//   images: [
//     { 
//       img: require("../editable-stuff/hashirshoaeb.png"), 
//       label: "First slide label", 
//       paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
//     },
//     { 
//       img: require("../editable-stuff/hashirshoaeb.png"), 
//       label: "Second slide label", 
//       paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
//     },
//   ],
//   imageSize: {
//     width:"615",
//     height:"450"
//   }
// };

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "AWS", value: 60 },
    { name: "MySQL", value: 70 },
    { name: "Data Structures", value: 85 },
    { name: "Nodejs", value: 75 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 80 },
    { name: "HTML/CSS", value: 85 },
    { name: "GIT", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering ! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "marcusmuasa@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Fullstack developer Developerr Badili Africa',// Here Add Company Name
     
      date: 'June 2022 – Present',
    },
    {
      role: 'Fullstack developer Developer Omnivoltaic Energy Solutions',
     
      date: 'Dec 2021 – March 2023',
    },
    {
      role: 'Fullstack developer Developer Paylend Africa',
     
      date: 'May 2020 – Nov 2021',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
