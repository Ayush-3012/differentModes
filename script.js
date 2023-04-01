// var image = "/img/light-icon.png";
var image = "/light-icon.png";
var color = "ghostwhite";
var label = "Light Mode";
var txtcolor = "black";
var bactxtcolor = "black";

function selectMode(mode) {
  if (mode === "dark") {
    color = "darkSlateBlue";
    image = "dark-icon.png";
    label = "Dark Mode";
    txtcolor = "white";
    bactxtcolor = "#003366";
  } else if (mode === "light") {
    color = "ghostWhite";
    image = "light-icon.png";
    label = "Light Mode";
    txtcolor = "blue";
    bactxtcolor = "#99ff99";
  } else {
    color = "dimGray";
    image = "ninja-icon.png";
    label = "Ninja Mode";
    txtcolor = "orange";
    bactxtcolor = "#006699";
  }

  console.log(label);

  document.getElementById("icon").src = image;
  document.getElementById("theme").style.backgroundColor = color;
  document.getElementById("label").innerHTML = label;
  document.getElementById("label").style.color = txtcolor;
  document.getElementById("label").style.backgroundColor = bactxtcolor;
}
