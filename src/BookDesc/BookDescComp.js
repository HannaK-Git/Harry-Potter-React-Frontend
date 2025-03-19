import React from "react";
import { Link, useParams } from "react-router-dom";

import FooterComp from "../Footer/FooterComp";
import NavBarComp from "../NavBar/NavBarComp";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./desc.module.css";

// Images
import book1 from "../images/1book.jpg";
import book2 from "../images/2book.jpg";
import book3 from "../images/3book.jpg";
import book4 from "../images/4book.jpg";
import book5 from "../images/5book.jpg";
import book6 from "../images/6book.jpg";
import book7 from "../images/7book.jpg";

// NOTE: Because it's valid JSON,
// you can import it directly (if your build setup allows).
import data from "../data.json";

const BookDescComp = () => {
  // Combine all books into a single array
  // data.books123, data.books456, and data.book7
  const allBooks = [...data.books123, ...data.books456, data.book7];

  // The images in the same order as IDs 1..7:
  const imgArray = [book1, book2, book3, book4, book5, book6, book7];

  // Grab the :id param from the URL
  const { id } = useParams();
  const numericId = Number(id);

  // Find the book with matching ID
  const book = allBooks.find((bk) => bk.id === numericId);

  // If no book is found, you can show a fallback UI:
  if (!book) {
    return (
      <div className={styles.mainCont}>
        <NavBarComp />
        <h2>Book not found!</h2>
        <Link to="/home" className={styles.link}>
          <FaArrowLeft style={{ verticalAlign: "-0.4rem" }} /> Back
        </Link>
        <FooterComp />
      </div>
    );
  }

  // We have a valid book now
  return (
    <div className={styles.mainCont}>
      <NavBarComp />

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
              // Adjust index for array (if ids are 1-based)
              src={imgArray[book.id - 1]}
              alt="Cover"
            />
          </figure>
        </section>
      </div>

      <FooterComp />
    </div>
  );
};

export default BookDescComp;
