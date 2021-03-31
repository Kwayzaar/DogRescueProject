const dawgURL = " http://localhost:3000/dawgs";

const dogSection = document.querySelector(".cards");
const dogContainer = document.querySelector(".card-container");

fetch(dawgURL)
  .then((response) => response.json())
  .then((dawgArray) => {
    
    dawgArray.forEach((dawgArray) => {

      const li = document.createElement("img");
      li.src = dawgArray.image;
      dogSection.append(li);
    });    
    
  });