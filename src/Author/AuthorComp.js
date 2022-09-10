import React from "react";
import NavBarComp from "../NavBar/NavBarComp";
import FooterComp from "../Footer/FooterComp";
import jkr from "../images/jk-rowling.jpg";
import styles from "./author.module.css";

import back from "../images/background.jpg";
import friends from "../images/friends.png";






const AuthorComp = () => {
  return (
    <div style={{ backgroundImage: "linear-gradient(#e5e2f4, #8e83aa)" }}>
      <NavBarComp></NavBarComp>
      <section className={styles.section1}>
        <figure>
          <img src={jkr} alt="JK-Rowling" />
        </figure>
        <figure>
          <img src={back} alt="background" />
          <figcaption
            style={{ position: "absolute", bottom: "0", left: "0", right: "0" }}
          >
            <p>
              &quot;I was told I would never make any money from writing
              children's book&quot;
            </p>
            <p>J.K.Rowling</p>
          </figcaption>
        </figure>
      </section>
      <h1 className={styles.h1}>About the Author</h1>
      <section className={styles.section2}>
        <article>
          <p>
            J.K. Rowling is a British author, screenwriter and film producer.
            She is best known for her Harry Potter series, which has won
            multiple Academy Awards for best book, and has been adapted into a
            number of films.
          </p>
          <p>
            Jo conceived the idea of Harry Potter in 1990 while sitting on a
            delayed train from Manchester to London King’s Cross. Over the next
            five years, she began to map out all seven books of the series. She
            wrote mostly in longhand and gradually built up a mass of notes,
            many of which were scribbled on odd scraps of paper.
          </p>
          <p>
            Having completed the full manuscript, she sent the first three
            chapters to a number of literary agents, one of whom wrote back
            asking to see the rest of it. She says it was “the best letter I had
            ever received in my life.”
          </p>
        </article>
        <article>
          <p>
            The book was first published by Bloomsbury Children’s Books in June
            1997, under the name J.K. Rowling.
          </p>
          <p>
            The book was published in the US by Scholastic under a different
            title (again at the publisher’s request), Harry Potter and the
            Sorcerer’s Stone, in 1998. Six further titles followed in the Harry
            Potter series, each achieving record-breaking success.
          </p>
          <p>
            In 2001, the film adaptation of the first book was released by
            Warner Bros., and was followed by six more book adaptations,
            concluding with the release of the eighth film, Harry Potter and the
            Deathly Hallows Part 2, in 2011.
          </p>
        </article>
      </section>
      <section className={styles.section3}>
        <figure>
          <img src={friends} alt="friends"/>
        </figure>
      </section>

      
      <FooterComp></FooterComp>
    </div>
  );
};

export default AuthorComp;
