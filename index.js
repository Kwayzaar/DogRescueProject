const dawgURL = " http://localhost:3000/dawgs";
const dogSection = document.querySelector(".cards");

fetch(dawgURL)
  .then((response) => response.json())
  .then((dawgURL) => {
    const li = document.createElement("li");
    li.src = dawgURL.image;
    dogSection.append(li);
  });
