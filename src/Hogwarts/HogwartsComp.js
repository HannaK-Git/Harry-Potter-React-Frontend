import React from "react";
import FooterComp from "../Footer/FooterComp";
import NavBarComp from "../NavBar/NavBarComp";
import styles from "./hogwarts.module.css";
import hero from "../images/hogwarts-hero.jpg";
import dumbledore from "../images/dumbledore.png";
import mcgonagall from "../images/mcgonagall.jpg";
import snape from "../images/snape.jpg";
import sprout from "../images/sprout.jpg";
import flitwick from "../images/flitwick.jpg";
import hoock from "../images/hooch.jpg";
import hagrid from "../images/hagrid.jpg";





const HogwartsComp = () => {





  return (
    <div className={styles.mainCont}>
      <NavBarComp></NavBarComp>
      <figure className={styles.hero}>
        <img src={hero} alt="HeroImage" />
        <figcaption>Welcome to Hogwarts</figcaption>
      </figure>

      {/* Tab section  */}
      <h1> Hogwarts Houses</h1>
      

      {/* Staff section  */}
      <h3 style={{ color: "#371c4b" }}>Hogwarts Staff</h3>

      <section className={styles.section1}>
        <figure>
          <img src={dumbledore} alt="Dumbledore" />
          <figcaption>
            <p>Professor Albus Dumbledore</p>

            <p>Headmaster</p>
          </figcaption>
        </figure>
      </section>
      <section className={styles.section2}>
        <figure>
          <img src={mcgonagall} alt="McGonagall" />
          <figcaption>
            <p>Professor Minerva McGonagall</p>
            <p>Professor of Transfiguration and Deputy Headmistress</p>
          </figcaption>
        </figure>
        <figure>
          <img src={snape} alt="Snape" />
          <figcaption>
            <p>Professor Severus Snape</p>
            <p>The Potions master</p>
          </figcaption>
        </figure>
        <figure>
          <img src={hagrid} alt="Hagrid" />
          <figcaption>
            <p>Professor Rubeus Hagrid</p>
            <p>Professor for Care of Magical Creatures</p>
          </figcaption>
        </figure>
      </section>

      <section className={styles.section3}>
        <figure>
          <img src={sprout} alt="Sprout" />
          <figcaption>
            <p>Professor Pomona Sprout</p>
            <p>Herbology</p>
          </figcaption>
        </figure>
        <figure>
          <img src={flitwick} alt="Flitwick" />
          <figcaption>
            <p>Professor Filius FLitwick</p>
            <p>The Charms professor</p>
          </figcaption>
        </figure>
        <figure>
          <img src={hoock} alt="Hoock" />
          <figcaption>
            <p>Professor Rolanda Hooch</p>
            <p>Flying teacher and Quidditch match referee</p>
          </figcaption>
        </figure>
      </section>
      <FooterComp></FooterComp>
    </div>
  );
};

export default HogwartsComp;
