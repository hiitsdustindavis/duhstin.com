import * as React from "react"
// import { Script } from "gatsby"
import Layout from "../components/Layout"
import Header from '../components/Header'
import * as style from "../styles/home.module.css"
// import "./p5Portrait.js"
import P5Sketch from '../components/P5Sketch';

const IndexPage = () => {
  return (
    <Layout>
    <main>
      <section className = {style.contentSection} >
        <div className={style.contentWrapper}>
          <spline-viewer url="https://prod.spline.design/gN31zazL01CcFhb7/scene.splinecode"></spline-viewer>
        </div>
        <Header/>
      </section>
      <section className = {style.contentSection} id="about">
        <div className={style.contentWrapper}>
          <div className={style.column2}>
            <h2>About</h2>
            <p>My name is Dustin Davis</p>
            <p>I’m a Web Designer and Developer</p>
            <p>I have 0ver 20 years of experience in graphic and web design and 8 years in Web development.</p>
          </div>
          <div className={style.column2}>
          <P5Sketch />
          </div>
        </div>
      </section>
      <section className = {style.contentSection} id="ability">
        <div className={style.contentWrapper}>
            <h2>Ability</h2>

            <div class="row abilities">
              <div class="col-3 ability">
                  <div class="emoji"></div>
                  <h3><span>39</span>Years of thinking deeply</h3>
              </div>
              <div class="col-3 ability">
                  <div class="emoji"></div>
                  <h3><span>26</span>Years Practicing Design</h3>
              </div>
              <div class="col-3 ability">
                  <div class="emoji"></div>
                  <h3><span>8</span>Years Practicing Web Development</h3>
              </div>
            </div>

            <div class="row abilities-text">
              <div class="col-3 ability-text">
                <h4>Software</h4>
                <ul>
                  <li><img src=""/>List Item</li>
                  <li><img src=""/>List Item</li>
                  <li><img src=""/>List Item</li>
                </ul>
              </div>
              <div class="col-3 ability-text">
                <h4>Design Practices</h4>
                <ul>
                  <li>List Item</li>
                  <li>List Item</li>
                  <li>List Item</li>
                </ul>
              </div>
              <div class="col-3 ability-text">
                <h4>Development Practices</h4>
                <ul>
                  <li>List Item</li>
                  <li>List Item</li>
                  <li>List Item</li>
                </ul>
              </div>
            </div>
          </div>
      </section>
      <section className = {style.contentSection} id="simplicity">
        <div className={style.contentWrapper}>
          <div>
            <h2>Simplicity</h2>
            <p>Blah blah blah blah blah</p>
          </div>
        </div>
      </section>
      <section className = {style.contentSection} id="contact">
        <div className={style.contentWrapper}>
          <div>
            <h2>Contact</h2>
            <p>Blah blah blah blah blah</p>
          </div>
        </div>
      </section>
    </main>
    </Layout>
  )
}

export default IndexPage

// export const Head = () => <title>Home Page</title>
export function Head() {
  return (
    <>
    <title>Home Page</title>
    <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.506/build/spline-viewer.js"></script>
    {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/p5.js"></script> */}
    {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/addons/p5.sound.min.js"></script> */}
    </>
    )
  }
