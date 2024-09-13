import * as React from "react"
import {Helmet} from "react-helmet";
import Layout from "../components/Layout"
import * as layout from "../styles/layout.module.css"
import logo from '../images/duhstin.com-logo-static.jpg'
import { Link } from "gatsby"
import "../styles/global-styles.css"

export default function CVPage() {
    return (
    <Layout>
      <Helmet><body className="page-cv" /></Helmet>
      <section className={layout.contentWrapper}>
        <div class="container">
        <Link className="has-img" to="/"><img alt="Duhstin dot com logo" className="logo" src={logo}/></Link>
          <div class="row contact">
            <div className={layout.half}>
              <h3>Dustin Davis</h3>
              <p><a href="https://duhstin.com">duhstin.com</a></p>
              <p><a href="mailto:hiitsdustindavis@gmail.com">hiitsdustindavis@gmail.com</a></p>
              <p><a href="tel:+15095702455">509 570 2455</a></p>
            </div>
            <div className={layout.half}>
              <a class="button print" href="javascript:window.print()">Print CV</a>
            </div>
          </div>
          <div class="cv-header">
            <h4>Skills</h4>
          </div>
          <div class="row">
            <div className={layout.third}>
              <strong>Doing Good at Work</strong>
              <ul>
                <li>Growth mindset believer</li>
                <li>Active listener</li>
                <li>Clear communicator</li>
                <li>Systems thinker</li>
                <li>Atomic designer</li>
                <li>Explorative Coder</li>
              </ul>
            </div>
            <div className={layout.third}>
              <strong>Software</strong>
              <ul>
                <li>Figma</li>
                <li>Adobe Creative Suite</li>
                <li>Affinity</li>
                <li>Spline Design 3D</li>
                <li>Blender</li>
                <li>Unity</li>
              </ul>
            </div>
            <div className={layout.third}>
              <strong>Dev Technologies</strong>
              <ul>
              <li>Wordpress / PHP</li>
              <li>jQuery / JavaScript / React </li>
                <li>HTML5 / Markdown</li>
                <li>CSS3 / SCSS / SASS</li>
                <li>Git / Subversion</li>
                <li>NPM / Gulp / Bash Terminal</li>
              </ul>
            </div>
          </div>
          <h4>Professional Experience</h4>
          <strong>Tenrec Inc. | Lead UI Designer and Developer | Remote | August 2016 - Present</strong>
          <ul>
            <li>Create clean, usable, and beautiful UI designs from wireframe to prototype</li>
            <li>Build solid, user-focused, accessible markup, efficient styling, and integrate 3rd party APIs and services</li>
            <li>Maintain, improve, and optimize WordPress sites with latest plugins, scripts, and design updates</li>
          </ul>
          <strong>Freelance Graphic Design | Portland, OR | November 2014 - January 2016</strong>
          <ul>
            <li>Branding and graphic design for Greetings From, an adventure/utility gear company</li>
            <li>Nonprofit marketing and graphic design for Race Talks and Lawn Life</li>
            <li>Art direction, graphic design, illustration, production and performance for The Wunder Womb.</li>
          </ul>
          <strong>One Spirit Learning Alliance | Head of Communications | New York, NY | August 2013 - September 2014</strong>
          <ul>
            <li>Created and maintained look and voice of all communications</li>
            <li>Executed content updates for onespiritinterfaith.org using Wordpress CMS</li>
            <li>Managed all Constant Contact e-mail and social media engagement</li>
          </ul>
        <strong>Freelance Graphic Design | New York, NY | September 2012 -July 2013</strong>
        <ul>
          <li>Created intuitive attributes for Sportlink, a professional sports team utility app</li>
          <li>Crafted and implemented successful identity design, book layout, application icons and attributes</li>
          <li>Collaborated with Brooklyn artists creating zines, posters, postcards and brochures</li>
        </ul>
        <strong>Marczyk Fine Foods | Marketing Assistant, Graphic Designer | Denver, CO | June 2010 - August 2012</strong>
        <ul>
          <li>Maintained consistent visual voice and environment of two retail locations</li>
          <li>Produced 300+ product signs per week, print advertisements, printed and embroidered apparel,</li>
          vehicle wraps and large format graphics and photographs
          <li>Increased social media following by over 175% by utilizing rich media, clever copy and crafty tagging, key-wording, liking and sharing</li>
        </ul>
        <strong>Faction Media | Graphic Designer | Denver, CO | January 2009 - May 2010</strong>
        <ul>
          <li>Created award winning brand identity for Avaya Aura, Avaya's people-centric, core communications platform launched in 2010</li>
          <li>Crafted and implemented multi-touch, multi-platform campaign pieces including direct mail postcards, trade show displays, microsites and multiple page catalogues</li>
          <li>Communicated effectively with account coordinators, web developers, copy writers, SEO managers,management and creative team in agency setting</li>
        </ul>

        <h4>Education</h4>
        <strong>Epicodus | Front-end Development | Portland, OR | January 2016 - June 2016</strong>
        <ul>
          <li>Course Track: Intro to Programming, CSS, JavaScript, and UI Design</li>
        </ul>
        <strong>Boise State University | Bachelor of Fine Arts, Graphic Design | Boise, ID | September 2003 - December 2007</strong>
        <ul>
          <li>Winner of Boise’s Poetry in Motion public transit poster campaign, featuring five original designs</li>
          <li>Completed all photographic courses offered including history, methodology and printing</li>
        </ul>
        </div>
      </section>
    </Layout>
    )
}