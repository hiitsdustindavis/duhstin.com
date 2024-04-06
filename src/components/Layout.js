import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/global-styles.css'


export default function Layout( { children } ) {
  return (
    <div className="layout">
        <div className="content">
            { children }
        </div>
        {/* <Footer/> */}
    </div>
  )
}
