import React from 'react'
import p5 from 'p5'

class Sketch extends React.Component {
    constructor(props) {
        super(props)
        //p5 instance mode requires a reference on the DOM to mount the sketch
        //So we use react's createRef function to give p5 a reference
        this.myRef = React.createRef()
    }

    // This uses p5's instance mode for sketch creation and namespacing
    Sketch = (p) => {
        // let img;
        let img = p.loadImage(require('../images/thispersondoesnotexist1.jpg'));
        // p.preload = () => {
        // Load your image using Gatsby's require
        // };
        p.setup = () => {
            p.createCanvas(400,400)
            // p.image(img, 0, 0, 400, 400);
        }

        p.draw = () => {
            // img.resize(400, 400);
              p.background(255);
            
              p.fill(0);
              p.noStroke();
            
              let tiles = p.mouseX/10;
              let tileSize = p.width/tiles;

              p.translate(tileSize/2, tileSize/2);
            
              for( p.x = 0; p.x < tiles; p.x++ ){
                for( p.y = 0; p.y < tiles; p.y++ ){
                
                //   let c = img.get(p.x*tileSize,p.y*tileSize);
                //   let size = (p.map(p.brightness(c), 0, 255, tileSize, 0));
                
                //   fill(random(0,100), random(0,255), random(0,100));
                  p.ellipse(p.x*tileSize, p.y*tileSize, 30, 30);   
                }
              }
                
              p.image(img, p.mouseX, p.mouseY, 50, 50);
        }
    }

    componentDidMount() {
        //We create a new p5 object on component mount, feed it 
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    render() {
        return (
            //This div will contain our p5 sketch
            <div ref={this.myRef}>

            </div>
        )
    }
}

export default Sketch