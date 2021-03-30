const baseURL = "https://dog.ceo/api/breed/hound/images";

fetch(baseURL)
  .then((response) => response.json())
  .then(console.log);
