const dawgURL = " http://localhost:3000/dawgs";
const dogSection = document.querySelector(".card-section");

fetch(dawgURL)
  .then((response) => response.json())
  .then();
