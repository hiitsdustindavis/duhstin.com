import React from 'react'
import '../styles/global-styles.css'


export default function Layout( { children } ) {
  return (
    <div className="layout">
        <div className="content">
            { children }
        </div>
    </div>
  )
};