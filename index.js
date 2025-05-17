window.addEventListener("DOMContentLoaded", (event) => {


const pilot = [
  document.getElementById("pilot"),
  document.getElementById("pilotLi")
];
const lore = [
  document.getElementById("lore")
  //   li: document.getElementById("loreLi")
];
console.log(lore)
const conceptArt = [
  document.getElementById("conceptArt"),
  //   li: document.getElementById("conceptArtLi")
];
const languages = [
  document.getElementById("languages"),
  //   li: document.getElementById("languagesLi")
]
const siteInfo = [
  document.getElementById("siteInfo"),
  //   li: document.getElementById("languagesLi")
]

setupDropdown(pilot);
setupDropdown(lore);
setupDropdown(conceptArt);
setupDropdown(languages);
setupDropdown(siteInfo);

function setupDropdown(ID) {
  ID[0].addEventListener("mouseover", function () { colorChange(ID[0], "green"); })
  ID[0].addEventListener("mouseout", function () { colorChange(ID[0], "#e6d7a1"); })
  ID[0].addEventListener("click", function () { dropDown(ID); })
  ID[1].isOn = false;
}

function colorChange(ID, color) {
  console.log(ID)
  ID.style.color = color;
}

function dropDown(ID) {
  if (ID[1].isOn) {
    ID[0].innerHTML = ID[0].innerHTML.replace("⮝", "⮟");
    ID[1].style.display = "none";
    ID[1].isOn = false;
  } else {
    ID[0].innerHTML = ID[0].innerHTML.replace("⮟", "⮝");
    ID[1].style.display = "block";
    ID[1].isOn = true;
  }
}
});