import * as React from "react"
import Spline from '@splinetool/react-spline'
import Layout from "../components/Layout"
import Header from '../components/Header'
import { Link } from "gatsby"
import {Helmet} from "react-helmet";
import dustinPortait from '../images/dustin_portrait.jpg'
import logo from '../images/duhstin.com-logo-static.jpg'
import faviconSVG from '../images/favicon/favicon.svg'
import faviconPNG from '../images/favicon/favicon.png'
import * as layout from "../styles/layout.module.css"
import "../components/MouseCursor"
import "../styles/global-styles.css"

const IndexPage = () => {
  return (
    <Layout>
    <Helmet><body className="home" />
        <link rel="icon" type="image/svg+xml" href={faviconSVG}></link>
        <link rel="icon" type="image/png" href={faviconPNG}></link>
    </Helmet>
    <main>
      <section className={layout.contentSection} >
        <div className="hero">
          <Spline scene="https://prod.spline.design/xRvQgZSl6VwHLvFQ/scene.splinecode" />
          <h1>Hey friend, 👋 Welcome to duhstin.com </h1>
        </div>
        <Header/>
      </section>
      <section className={layout.contentSection} id="about">
      <div className={layout.contentWrapper}>
        <div className="row">
          <div className={layout.full}>
              <h2>About</h2>
          </div>
        </div>
        <div className="row">
            <div className={layout.half}>
              <img alt="Portrait of Dustin Davis" className="portrait" src={dustinPortait}/>
              {/* <P5Sketch /> */}
          </div>
            <div className={`${layout.half} text`}>
              <p>My name is Dustin Davis</p>
              <p>I’m a Web Designer and Developer</p>
              <p>I have 0ver 20 years of experience in graphic and web design and 8 years in Web development.</p>
              <p>I'm bilingual. I like cities and the woods.</p>
              <p>I see latent improvements everywhere.</p>
            </div>
        </div>
        </div>
      </section>
      <section className={layout.contentSection} id="ability">
        <div className={layout.contentWrapper}>
            <h2>Ability</h2>

            <div className="row abilities cards">
              <div className="col-3 ability">
                  <div className="emoji"></div>
                  <h3><span>39</span>Years of <br></br>thinking deeply</h3>
              </div>
              <div className="col-3 ability">
                  <div className="emoji"></div>
                  <h3><span>26</span>Years Practicing <br></br>Design</h3>
              </div>
              <div className="col-3 ability">
                  <div className="emoji"></div>
                  <h3><span>8</span>Years Practicing <br></br>Web Development</h3>
              </div>
            </div>
            <div className="row abilities text">
              <div className="col-3 ability-text">
                <h4>Software</h4>
                <ul className="no-bullet">
                  <li>
                    {/* <img src="" alt=""/> */}
                  Adobe Creative Suite
                  </li>
                  <li>
                    {/* <img src="" alt=""/> */}
                  Figma
                  </li>
                  <li>
                    {/* <img src="" alt=""/> */}
                  Spline 3D Design
                  </li>
                  <li>
                    {/* <img src="" alt=""/> */}
                  Visual Studio Code
                  </li>
                </ul>
              </div>
              <div className="col-3 ability-text">
                <h4>Design Practices</h4>
                <ul className="no-bullet">
                  <li>Solid Concepts &gt; Fancy Fillers</li>
                  <li>Systems = Consistency = Joyful UX</li>
                  <li>Empathy for Visitors Always</li>
                </ul>
              </div>
              <div className="col-3 ability-text">
                <h4>Development Practices</h4>
                <ul className="no-bullet">
                  <li>WordPress / PHP</li>
                  <li>React / Javascript / Node</li>
                  <li>CSS / Sass / CSS Modules</li>
                </ul>
              </div>
            </div>
          </div>
      </section>
      {/* <section className={layout.contentSection} id="simplicity">
        <div className={layout.contentWrapper}>
          <div>
            <h2>Simplicity</h2>
            <p>Blah blah blah blah blah</p>
          </div>
        </div>
      </section> */}
      <section className={layout.contentSection} id="contact">
      <div className={layout.contentWrapper}>
        <div className="row">
          <div className={layout.full}>
              <h2>Contact</h2>
          </div>
        </div>
        <div className="row">
            <div className={`${layout.half} text`}>
              <p>Reach out anytime and I'll get right back to ya :)</p>
              <p><Link to="/cv/">Curriculum Vitae</Link></p>
              <p>Portfolio upon request ;)</p>
              <p><a href="mailto:hiitsdustindavis@gmail.com"><span>💌</span> hiitsdustindavis@gmail.com</a></p>
            </div>
            <div className={layout.half}>
            <div><iframe src="https://giphy.com/embed/QWkuGmMgphvmE" width="100%" height="100%" className="giphy-embed"></iframe></div>
            </div>
        </div>
        </div>
      </section>
    </main>
    </Layout>
  )
}


export default IndexPage

export function Head() {
  return (
    <>
    <title>Home Page</title>
    <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.506/build/spline-viewer.js"></script>
    </>
    )
  }
