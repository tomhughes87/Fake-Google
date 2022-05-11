const about = document.getElementById("aboutLink");
const darkmode = document.getElementById("darkLink");
let CheckDarkOn = false;

///////ABOUT/////////
about.addEventListener("click", openAbout);
function openAbout() {
  alert("Welcome to Fake-Google\nThis service was created by Igor and Tom");
}

// const mainbody = document.querySelector("p");
// mainbody.style.backgroundColor = "rgb(39, 39, 39)";
// mainbody.style.color = "red";

///////darkmode/////////
darkmode.addEventListener("click", swicthColours);

function swicthColours(e) {
  console.log("dark mode clicked");
  console.log(CheckDarkOn);
  e.preventDefault();
  let mainbody = document.querySelector("body");
  //   mainbody.style.backgroundColor = "rgb(39, 39, 39)";
  //   mainbody.style.color = "white";

  if (CheckDarkOn === false) {
    mainbody.style.backgroundColor = "rgb(39, 39, 39)";
    mainbody.style.color = "white";
    CheckDarkOn = true;
  } else {
    mainbody.style.backgroundColor = "white";
    mainbody.style.color = "black";
    CheckDarkOn = false;
  }
}
