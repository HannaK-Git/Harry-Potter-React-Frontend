import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './nav.module.css'




const NavBarComp = () => {


 
  return (
    <div className={styles.main}>
      <nav className={styles.navClass}>
        <ul>
          <li>
            <NavLink to="/home" className={styles.navLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/hogwarts" className={styles.navLink}>
              Hogwarts
            </NavLink>
          </li>
          <li>
            <NavLink to="/author" className={styles.navLink}>
              J.K. Rowling
            </NavLink>
          </li>
          <li>
            <NavLink to="/mainchar" className={styles.navLink}>
              Main Characters
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBarComp;
