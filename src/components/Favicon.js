import React from 'react'
import faviconSVG from '../favicon/favicon.svg'
import faviconPNG from '../favicon/favicon.png'
import appleTouch from "../favicon/apple-touch-icon.png"
import favicon32x32 from "../favicon/favicon-32x32.png"
import favicon16x16 from "../favicon/favicon-16x16.png"
// site.webmanifest creation is set with the Gatsby Plugin gatsby-plugin-manifest

import safariPinnedTab from "../favicon/safari-pinned-tab.svg"

export default function Favicon() {
  return (
    <div>
        <body className="home" />
        <link rel="icon" type="image/svg+xml" href={faviconSVG}></link>
        <link rel="icon" type="image/png" href={faviconPNG}></link>
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouch}></link>
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32x32}></link>
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16x16}></link>
        <link rel="mask-icon" href={safariPinnedTab} color="#5bbad5"></link>
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
    </div>
  )
}