import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./nav.module.css";

const NavBarComp = () => {
  return (
    <div className={styles.main}>
      <nav className={styles.navClass}>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hogwarts"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Hogwarts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/author"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              J.K. Rowling
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mainchar"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Main Characters
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tictactoe"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
            >
              Let's Play
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBarComp;
