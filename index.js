const dawgURL = " http://localhost:3000/dawgs";

const dogSection = document.querySelector(".cards");
const dogContainer = document.querySelector(".card-container");

fetch(dawgURL)
  .then((response) => response.json())
  .then((dawgArray) => {
    dawgArray.forEach((dawgImg) => {
      const li = document.createElement("img");
      li.src = dawgImg.image;
      dogSection.append(li);
    });

    document.
  });