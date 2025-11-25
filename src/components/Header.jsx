import React from "react";
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      
      {/* We add the container here */}
      <div className={`${styles.headerContainer} container`}>
        
        <h1><Link to="/">My Portfolio</Link></h1> 

        <nav>
          <ul className={styles.navList}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contacts</Link></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;