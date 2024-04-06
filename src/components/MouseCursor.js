window.onload = function(){ 

console.log ('window loaded');
let constrain = 600;
let mouseOverContainer = document.querySelector("#ability");
let mouseOverItems = document.querySelectorAll(".col-3.ability");

console.dir("mouseOverContainer " + mouseOverContainer);
    function transforms(x, y, el) {
      let box = el.getBoundingClientRect();
      let calcX = -(y - box.y - (box.height / 2)) / constrain;
      let calcY = (x - box.x - (box.width / 2)) / constrain;
      
      return "perspective(100px) "
        + "   rotateX("+ calcX +"deg) "
        + "   rotateY("+ calcY +"deg) "
    };
    
    function transformElement(el, xyEl) {
      el.style.transform  = transforms.apply(null, xyEl);
    }
    
    mouseOverContainer.onmousemove = function(e) {
        mouseOverItems.forEach(function(mouseOverItem){
            let xy = [e.clientX, e.clientY];
            let position = xy.concat([mouseOverItem]);
            
            window.requestAnimationFrame(function(){
                transformElement(mouseOverItem, position);
            });
        })
    };

}
