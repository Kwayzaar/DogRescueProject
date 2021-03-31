const dawgURL = " http://localhost:3000/dawgs";
<<<<<<< HEAD

const dogSection = document.querySelector(".cards");
const dogContainer = document.querySelector(".card-container");
=======
const dawgSection = document.querySelector(".cards");
const dawgContainer = document.querySelector(".card-container");
>>>>>>> 517b85cfe8444f95697bba19e479c5f9acadfaf5

fetch(dawgURL)
  .then((response) => response.json())
  .then((dawgArray) => {
<<<<<<< HEAD
    
    dawgArray.forEach((dawgArray) => {

      const li = document.createElement("img");
      li.src = dawgArray.image;
      dogSection.append(li);
    });    
    
  });
=======
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
>>>>>>> 517b85cfe8444f95697bba19e479c5f9acadfaf5
