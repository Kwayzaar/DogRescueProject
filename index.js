const dawgURL = " http://localhost:3000/dawgs";

fetch(dawgURL)
  .then((response) => response.json())
  .then(console.log);
