const dawgURL = " http://localhost:3000/dawgs";
const dawgSection = document.querySelector(".cards");
const dawgContainer = document.querySelector(".card-container");

fetch(dawgURL)
  .then((response) => response.json())
  .then((dawgArray) => {
    dawgArray.forEach((dawgs) => {
      const dawgCard = document.createElement("div"); //makes dog card

      const dawgName = document.createElement("h3"); //makes header for name
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
    window.onscroll = function() {myFunction()};
  });


// Sticky Navbar

const navbar = document.querySelector("#menuBar");
const sticky = navbar.offsetTop;

function navStick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}