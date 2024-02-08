
window.addEventListener('load', () => {
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');

  canvas.height = window.innerHeight;
  // canvas.width = 600 + 'px';

  canvas.height = window.innerHeight;
  // canvas.width = 600 + 'px';

  ctx.fillStyle = "#fff";

  make_base();

  function make_base()
  {
    let base_image = new Image();
    base_image.src = '/thispersondoesnotexist-.jpg';
    base_image.onload = function(){
      ctx.drawImage(base_image, 0, 0);
    }
  }

  
})
window.addEventListener("mousemove", (event) => {});

onmousemove = (event) => {
  // console.log(event.offsetX);
};


// let img;

// function setup() {
//   createCanvas(400, 400);
//   img = loadImage('thispersondoesnotexist.jpeg');
//   frameRate(12);

// }

// function draw() {
//   img.resize(400, 400);
//   background(255);
  
//   fill(0);
//   noStroke();
  
//   let tiles = mouseX/5;
//   let tileSize = width/tiles;
  
//   for( x = 0; x < tiles; x++ ){
//     for( y = 0; y < tiles; y++ ){
      
//       let c = img.get(x*tileSize,y*tileSize);
//       let size = (map(brightness(c), 0, 255, tileSize, 0));
      
//       // fill(random(0,100), random(0,255), random(0,100));
//       fill(0);
//       ellipse(x*tileSize, y*tileSize, size, size);   
//     }
//   }
      
//   // image(img, mouseX, mouseY, 50, 50);
// }
