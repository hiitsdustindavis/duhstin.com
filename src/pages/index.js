import * as React from "react"
// import { Script } from "gatsby"
import Layout from "../components/Layout"
import Header from '../components/Header'
import * as style from "../styles/home.module.css"
import "./p5Portrait.js"

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
            <canvas id="canvas"></canvas>
          </div>
        </div>
      </section>
      <section className = {style.contentSection} id="ability">
        <div className={style.contentWrapper}>
          <div>
            <h2>Ability</h2>
            <p>Blah blah blah blah blah</p>
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
