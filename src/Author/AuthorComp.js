import React from "react";
import NavBarComp from "../NavBar/NavBarComp";
import FooterComp from "../Footer/FooterComp";
import jkr from "../images/jk-rowling.jpg";
import styles from "./author.module.css";

import back from "../images/background.jpg";
import friends from "../images/friends.png";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";




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
          <img src={friends} />
        </figure>
      </section>

      <section className={styles.section4}>
        <h2 className={styles.h2}>Some interesting facts about J.K. Rowling</h2>
        <article>
          <Accordion>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <h3>Rejection by 12 Publishers</h3>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>
                  This is not that much of a lesser-known fact but many people
                  don’t know this. J. K. Rowling’s Harry Potter was rejected by
                  12 publishers. But the Bloomsbury publication gave her a
                  chance and the rest is history. Harry Potter is loved
                  worldwide and it changed her life.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>
                <h3>Harry and her birthday</h3>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>
                  Harry Potter is a widely loved fantasy fictional. We love all
                  the characters of the series, even if the character is pure
                  evil we find something good in them. It is because Rowling has
                  put her pieces to the characters. And one of the examples of
                  this is Her and Harry’s. She’s born on 31 July 1965 and
                  Harry’s birthday in the book is 1980.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>
                <h3>Drafts of Harry Potter were made in Edinburgh’s cafes</h3>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>
                  J. K. Rowling had the idea of Harry Potter when she was
                  waiting for her train from Manchester to England. She worked
                  as a researcher and bilingual secretary in London for Amnesty
                  International. She moved to Edinburgh in 1993 and started
                  writing the book in the cafes of Edinburgh. Once in an
                  interview, she said, “Edinburgh is very much home for me and
                  is the place where Harry evolved over seven books and many,
                  many hours of writing in its cafes.”
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          
        </article>
      </section>
      <FooterComp></FooterComp>
    </div>
  );
};

export default AuthorComp;
