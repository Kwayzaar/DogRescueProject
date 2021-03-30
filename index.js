const dawgURL = "http://localhost:3000/dawgs/";

const dogSection = document.querySelector(".cards");


fetch(dawgURL)
  .then(response => response.json())
  .then(console.log)
  .then(dawgArray => {
    dawgArray.forEach((dawgImg) => {
      const li = document.createElement("img");
      img.src = dawgImg.image;
      dogSection.append(li);
    })
  });
