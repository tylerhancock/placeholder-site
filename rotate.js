document.addEventListener("mousemove", function (event) {
  const x = event.pageX
  const y = event.pageY

  const midX = x - window.innerWidth / 2
  const midY = y - window.innerHeight / 2

  // selecting tyler
  const face = document.querySelector("section.tyler")

  // following the mouse left/right face.style.left = x + "px"
  // following the mouse up/down face.style.top = y + "px"
  	
  
  face.style.transform = "rotateY(" + (midX * 0.1) + "deg) rotateX(" + (-midY * 0.05) + "deg)"
})


var elem = document.getElementById("view3d");

window.addEventListener("deviceorientation", function(e) {
  // remember to use vendor-prefixed transform property
  elem.style.transform =
    "rotateZ(" + ( e.alpha - 180 ) + "deg) " +
    "rotateX(" + e.beta + "deg) " +
    "rotateY(" + ( -e.gamma ) + "deg)";
});