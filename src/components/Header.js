import { Link } from 'gatsby'
import React, { useState, useEffect, useRef } from 'react'
import logo from '../images/duhstin.com-logo-static.jpg'
import { AnchorLink } from "gatsby-plugin-anchor-links";

function Header() {
  const [isHeaderAtTop, setIsHeaderAtTop] = useState(false);
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  // const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const windowHeight = window.innerHeight
    const headerHeight = headerRef.current.getBoundingClientRect().height;
    if (headerRef.current) {
      setHeaderHeight(headerHeight);
    }
    const handleScroll = () => {
      if (headerRef.current) {
        const headerTop = headerRef.current.getBoundingClientRect().top;
        // const headerBottom = headerRef.current.getBoundingClientRect().bottom;
        
        
        setIsHeaderAtTop(headerTop <= 0 || window.scrollY >= headerTop);
        setIsHeaderSticky(headerTop <= 0 || window.scrollY >= headerTop);
        console.log(windowHeight - headerHeight);

        // Check if the bottom of the header is at its initial position
        if (window.scrollY <= windowHeight - headerHeight) {
          
          setIsHeaderSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={isHeaderSticky ? 'sticky' : ''}
    >
      <Link to="/"><img class="logo" src={logo}/></Link>
      <nav>
        <ul>
          <li><AnchorLink to="#about">About</AnchorLink></li>
          <li><AnchorLink to="#ability">Ability</AnchorLink></li>
          <li><AnchorLink to="#contact">Contact</AnchorLink></li>
        </ul>
        {/* <AnchorLink to="#simplicity">Simplicity</AnchorLink> */}
      </nav>
    </header>
  );
}

export default Header;
