const dawgURL = " http://localhost:3000/dawgs";
const dawgSection = document.querySelector(".cards");
const dawgContainer = document.querySelector(".card-container");
const dawgForm = document.querySelector("#volunteer-form");
const usersURL = "http://localhost:3000/users";

fetch(dawgURL)
  .then((response) => response.json())
  .then((dawgArray) => {
    dawgArray.forEach((dawgs) => {
      const dawgCard = document.createElement("div"); //makes dog card

      const dawgName = document.createElement("h3"); //makes header for name
      dawgName.textContent = dawgs.name;
      dawgName.setAttribute("class", "java-dawg");

      const dawgImg = document.createElement("img");
      dawgImg.src = dawgs.image;

      const dawgBreed = document.createElement("p");
      dawgBreed.textContent = dawgs.breed;
      dawgBreed.setAttribute("class", "java-dawg");

      const dawgSex = document.createElement("p");
      dawgSex.textContent = dawgs.sex;
      dawgSex.setAttribute("class", "java-dawg");

      const dawgAge = document.createElement("p");
      dawgAge.textContent = dawgs.age;
      dawgAge.setAttribute("class", "java-dawg");

      dawgCard.append(dawgName, dawgImg, dawgBreed, dawgAge, dawgSex);
      dawgContainer.append(dawgCard);
    });
  });
window.onscroll = function () {
  navStick();
};

// Sticky Navbar
const navbar = document.querySelector(".test");
const sticky = navbar.offsetTop;

function navStick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
// Volunteer Form
dawgForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get("name");
  const phoneNumber = formData.get("phone-number");
  const email = formData.get("email");
  const questionaire = formData.get("why-do-you-want-to-volunteer");

  dawgForm.reset();
  console.log("Name:", name);
  console.log("Phone Number:", phoneNumber);
  console.log("Email:", email);
  console.log("Questionaire:", questionaire);

  fetch(usersURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      phone_number: phoneNumber,
      email: email,
      questionaire: questionaire,
    }),
  });
});
