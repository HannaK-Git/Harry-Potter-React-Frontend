import React from 'react'

import { Link, useParams } from 'react-router-dom';
import FooterComp from '../Footer/FooterComp';
import book1 from "../images/1book.jpg";
import book2 from "../images/2book.jpg";
import book3 from "../images/3book.jpg";
import book4 from "../images/4book.jpg";
import book5 from "../images/5book.jpg";
import book6 from "../images/6book.jpg";
import book7 from "../images/7book.jpg";
import NavBarComp from '../NavBar/NavBarComp';
import styles from './desc.module.css';
import { FaArrowLeft } from "react-icons/fa";

const BookDescComp = (props) => {
const img = [book1, book2, book3, book4, book5, book6, book7];


let {id} = useParams();
let data = require('../data.json');

  return (
    <div className={styles.mainCont}>
      <NavBarComp></NavBarComp>
      {data
        .filter((book) => book.id == id)
        .map((book, index) => {
          return (
            <div className={styles.container}>
              <section className={styles.section}>
                <section>
                  <h1>{book.bname}</h1>

                  <p>Author: {book.author}</p>
                </section>
                <div className={styles.leftCont}>
                  <div className={styles.shortDesc}>
                    <p>{book.description}</p>
                  </div>

                  <Link className={styles.link} to="/home">
                    <FaArrowLeft style={{ verticalAlign: "-0.4rem" }} /> Back
                  </Link>
                </div>

                <figure className={styles.figure}>
                  <img
                    className={styles.img}
                    src={img[book.id - 1]}
                    alt="Cover"
                  />
                </figure>
              </section>
            </div>
          );
        })}
      <FooterComp></FooterComp>
    </div>
  );
}

export default BookDescComp