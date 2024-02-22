window.onload = function(){ 
let constrain = 600;
let mouseOverContainer = document.getElementById("ability");
let mouseOverItems = document.querySelectorAll(".col-3.ability");


    function transforms(x, y, el) {
      let box = el.getBoundingClientRect();
      let calcX = -(y - box.y - (box.height / 2)) / constrain;
      let calcY = (x - box.x - (box.width / 2)) / constrain;
      
      return "perspective(100px) "
        + "   rotateX("+ calcX +"deg) "
        + "   rotateY("+ calcY +"deg) "
        // + "   transition: all .1s ease-in-out;";
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
