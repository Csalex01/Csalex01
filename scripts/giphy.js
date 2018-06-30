let gpAPI = "https://api.giphy.com/v1/gifs/random?api_key=GpaCHgHroupp5xpkPisG9hHg1QhDMWG3&tag=&rating=G";

let nums;

let promises = [];

let txt;

function setup() {
  noCanvas();

}

function queryGiphy() {
  // nums = Math.floor(Math.random() * 4);

  nums = 1;

  div = document.getElementById("api_div");

  for (let i = 0; i < nums; i++) {
    promises[i] = Giphy();
  }

  Promise.all(promises)
    .then((results) => {
      results.forEach((x) => {
        let img = document.createElement("img");
        img.src = x;
        div.appendChild(img);
      });
    })
    .catch((err) => console.error(err));
}

async function Giphy() {
  let response = await fetch(gpAPI);
  let json1 = await response.json();
  let img_url = json1.data.image_original_url;
  return img_url;
}