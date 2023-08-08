if (location.hostname === "calendar.google.com") {
  document.body.backgroundColor = "#020202";
  let root = document.documentElement;
  root.style.setProperty("--surface", "#020202");
  root.style.setProperty("--on-surface", "#6f6f6f");
  root.style.setProperty("--on-surface-variant-agm", "#FFFFFF");
  root.style.setProperty("--background", "#020202");
  document.getElementById("gb").style = "background-color:rgba(0,0,0,1)";
}
