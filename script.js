const container = document.querySelector("#container"),  
    tile = document.querySelector(".tile");

for(let i = 0; i < 1599; i++) {
  container.appendChild(tile.cloneNode());
}

const script = document.createElement("script");

script.src = "https://kit.fontawesome.com/1ee8f271b9.js";

document.body.appendChild(script);