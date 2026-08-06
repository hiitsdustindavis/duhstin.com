import React from 'react'
import * as layout from "../styles/layout.module.css"
import cx from 'classnames';


export default function Footer() {
  return (
    <footer id="footer">
      <section className={cx(layout.contentSection)} id="about">
          <div className={cx(layout.contentWrapper, layout.short, layout.row, layout.spcBtwn)}>
            <p>© Copyright Dustin Davis {new Date().getFullYear()}</p>
            <div>Designed and built by yours truly ;)</div>
        </div>
      </section>
    </footer>
  )
}
