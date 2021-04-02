## General Info 
L&&L Dog Rescue is a website we made to help rescues find their forever homes! 

## Technologies
* HTML
* CSS
* JavaScript
* db.json

## Setup
To run this website, locally clone the GitHun repository and run the following commands in your terminal
```
npm install -g json-server
json-server --watch db.json
lite-server
```

## Code Examples
```
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
```
```
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
```
