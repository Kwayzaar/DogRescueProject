const dawgURL = " http://localhost:3000/dawgs";
const dawgSection = document.querySelector(".cards");
const dawgContainer = document.querySelector(".card-container");

fetch(dawgURL)
  .then((response) => response.json())
  .then((dawgArray) => {
    dawgArray.forEach((dawgs) => {
      //getting images on the page
      const dawgCard = document.createElement("div");

      const dawgName = document.createElement("h2");
      dawgName.textContent = dawgs.name;

      const dawgImg = document.createElement("img");
      dawgImg.src = dawgs.image;

      const dawgBreed = document.createElement("p");
      dawgBreed.textContent = dawgs.breed;

      const dawgSex = document.createElement("p");
      dawgSex.textContent = dawgs.sex;

      const dawgAge = document.createElement("p");
      dawgAge.textContent = dawgs.age;

      dawgCard.append(dawgName, dawgImg, dawgBreed, dawgAge, dawgSex);
      dawgContainer.append(dawgCard);
    });
  });
