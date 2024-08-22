const container = document.querySelector("#container"),  
    tile = document.querySelector(".tile");

for(let i = 0; i < 1599; i++) {
  container.appendChild(tile.cloneNode());
}


if ($(window).width() <= 960 && $(window).height <= 640) { /* ... */ } { // detect mobile browser
  print("Mobile Detected")
  window.location.replace("https://rickroll.link"); // redirect if mobile browser detected
}