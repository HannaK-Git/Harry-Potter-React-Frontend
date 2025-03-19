import React from 'react'
import NavBarComp from '../NavBar/NavBarComp'
import styles from './homePage.module.css'
import hogCover from '../images/quidditch.jpg'
import hogwarts from '../images/hogwartsCov.jpg'
import letter from '../images/letter.jpg'
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import book1 from '../images/1book.jpg'
import book2 from '../images/2book.jpg'
import book3 from '../images/3book.jpg'
import book4 from '../images/4book.jpg'
import book5 from '../images/5book.jpg'
import book6 from '../images/6book.jpg'
import book7 from '../images/7book.jpg'
import {FaBroom} from 'react-icons/fa'
import FooterComp from '../Footer/FooterComp'
import { Link } from 'react-router-dom'
import { FaAngleDoubleRight } from "react-icons/fa";
import Owl from '../Owl.js'



const HomePage = () => {
const img123 = [book1, book2, book3]
 const img456 = [book4, book5, book6];
const images = [hogCover, hogwarts, letter];
const data = require('../data.json')

  return (
    <div className={styles.main}>
      <nav className={styles.nav}>
        <NavBarComp />
      </nav>
      <div className={styles.slideshow}>
        <Slide autoplay={true} className={styles.slide}>
          <div className={styles.eachSlideEffect}>
            <div style={{ backgroundImage: `url(${images[0]})` }}>
              {/* <span>Slide 1</span> */}
            </div>
          </div>
          <div className={styles.eachSlideEffect}>
            <div style={{ backgroundImage: `url(${images[1]}` }}>
              {/* <span>Slide 2</span> */}
            </div>
          </div>
          <div className={styles.eachSlideEffect}>
            <div style={{ backgroundImage: `url(${images[2]}` }}>
              {/* <span>Slide 3</span> */}
            </div>
          </div>
        </Slide>
      </div>

      {/* Gallery items  */}

      <h1 className={styles.h1}>
        {" "}
        <FaBroom style={{ fontSize: "5rem" }}></FaBroom> Books{" "}
        <FaBroom style={{ fontSize: "5rem" }}></FaBroom>
      </h1>
      <div className={styles.library}>
        {/* Reder Items */}

        {data.books123.map((book, index) => {
          return (
            <div key={book.id}>
              <div className={styles.cardIt}>
                <figure className={styles.itemCard}>
                  <img src={img123[index]} alt="cover" />

                  <figcaption>{book.bname}</figcaption>
                </figure>
                <div className={styles.backCard}>
                  <p>{book.shortDescription}</p>
                  <Link to={`/book/${book.id}`}>
                    Read More{" "}
                    <FaAngleDoubleRight style={{ verticalAlign: "-0.3rem" }} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

        {data.books456.map((book, index) => {
          return (
            <div key={book.id}>
              <div className={styles.cardIt}>
                <figure className={styles.itemCard}>
                  <img src={img456[index]} alt="cover" />

                  <figcaption>{book.bname}</figcaption>
                </figure>
                <div className={styles.backCard}>
                  <p>{book.shortDescription}</p>
                  <Link to={`/book/${book.id}`}>
                    Read More{" "}
                    <FaAngleDoubleRight style={{ verticalAlign: "-0.3rem" }} />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        <div className={styles.cardIt}>
          <Owl />
        </div>
        <div className={styles.cardIt}>
          <figure className={styles.itemCard}>
            <img src={book7} alt="cover" />

            <figcaption>{data.book7.bname}</figcaption>
          </figure>
          <div className={styles.backCard}>
            <p>{data.book7.shortDescription}</p>
            <Link to={`/book/${data.book7.id}`}>
              Read More{" "}
              <FaAngleDoubleRight style={{ verticalAlign: "-0.3rem" }} />
            </Link>
          </div>
        </div>
      </div>

      <FooterComp />
    </div>
  );
}

export default HomePage