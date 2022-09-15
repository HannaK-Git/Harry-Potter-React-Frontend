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
import allHouses from "../images/facultLogos.png";
import gr from "../images/gr.png";
import sl from "../images/sl.png";
import rv from "../images/rv.png";
import hp from "../images/hp.png";
import hpCover from "../images/hpCover.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";



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
      <section className={styles.section0}>
        <div className={styles.houses}>
          <figure>
            <img src={allHouses} alt="Houses" />
          </figure>
        </div>
        <div className={styles.boxSec}>
          <Tabs>
            <TabList>
              <Tab>
                <h2>Gryffindor</h2>
              </Tab>
              <Tab>
                <h2>Ravenclaw</h2>
              </Tab>
              <Tab>
                <h2>Hufflepuff</h2>
              </Tab>
              <Tab>
                <h2>Slytherin</h2>
              </Tab>
            </TabList>

            <TabPanel>
              <section className={styles.tabSec}>
                <p>
                  Gryffindor valued bravery, daring, nerve, and chivalry. Its
                  emblematic animal was the lion, and its colours were scarlet
                  and gold.Minerva McGonagall was the most recent Head of
                  Gryffindor.Sir Nicholas de Mimsy-Porpington, also known as
                  "Nearly Headless Nick", was the House Ghost. The founder of
                  the House was Godric Gryffindor. Gryffindor corresponded to
                  the element of Fire. The common room was located in one of the
                  highest towers at Hogwarts, the entrance was situated on the
                  seventh floor in the east wing of the castle and was guarded
                  by a portrait of The Fat Lady. She permitted entrance if given
                  the correct password, which was changed numerous times
                  throughout the school year. Famous Gryffindors included Albus
                  Dumbledore, Harry Potter, and Minerva McGonagall.
                </p>
                <figure>
                  <img src={gr} alt="Gryffindor" />
                </figure>
              </section>
            </TabPanel>
            <TabPanel>
              <h2>Ravenclaw</h2>
              <section className={styles.tabSec}>
                <p>
                  Ravenclaw valued intelligence, knowledge, curiosity,
                  creativity and wit. Its emblematic animal was the eagle, and
                  its colours were blue and bronze. The Ravenclaw Head of House
                  in the 1990s was Filius Flitwick. The ghost of Ravenclaw was
                  the Grey Lady, who was the daughter of Rowena Ravenclaw, the
                  House's founder. Ravenclaw corresponded to the element of air.
                  The Ravenclaw common room and dormitories were located in a
                  tower on the west side of the castle. Ravenclaw students must
                  answer a riddle as opposed to giving a password to enter their
                  dormitories. This riddle, however, could be answered by
                  non-Ravenclaws. Famous Ravenclaws included Luna Lovegood,
                  Gilderoy Lockhart, Ignatia Wildsmith (inventor of Floo
                  powder), and Garrick Ollivander.
                </p>
                <figure>
                  <img src={rv} alt="Ravenclaw" />
                </figure>
              </section>
            </TabPanel>
            <TabPanel>
              <section className={styles.tabSec}>
                <p>
                  Hufflepuff valued hard work, dedication, patience, loyalty,
                  and fair play. Its emblematic animal was the badger, and
                  yellow and black were its colours. Pomona Sprout was the Head
                  of Hufflepuff during 1991–1998, Sprout left the post of Head
                  of Hufflepuff and Herbology Professor sometime before 2017 and
                  her successor for the position of Head of Hufflepuff was
                  currently unknown. The Fat Friar was its ghost. The founder of
                  the House was Helga Hufflepuff. Hufflepuff corresponded to the
                  element of earth. The Hufflepuff dormitories and common room
                  were located somewhere in the basement. Famous Hufflepuffs
                  included Hengist of Woodcroft (founder of Hogsmeade), Newt
                  Scamander (author of Fantastic Beasts and Where to Find Them),
                  and Artemisia Lufkin (first female minister for magic).
                </p>
                <figure>
                  <img src={hpCover} alt="Hufflepuff" />
                </figure>
              </section>
            </TabPanel>
            <TabPanel>
              <section className={styles.tabSec}>
                <p>
                  Slytherin valued ambition, leadership, self-preservation,
                  cunning and resourcefulness and was founded by Salazar
                  Slytherin. Its emblematic animal was the serpent, and its
                  colours were emerald green and silver. Professor Horace
                  Slughorn was the Head of Slytherin during the 1997–1998 school
                  year, replacing Severus Snape, who as well replaced Slughorn
                  as Potions Professor when he retired for the first time
                  several years prior. Slytherin had produced the most Death
                  Eaters and Dark Wizards, including Tom Riddle, Bellatrix
                  Lestrange and Lucius Malfoy, for example. But that does not
                  mean that other Houses hadn't produced any; Peter Pettigrew
                  was a Gryffindor, and Quirinus Quirrell was a Ravenclaw.
                </p>
                <figure>
                  <img src={sl} alt="Slytherin"/>
                </figure>
              </section>
            </TabPanel>
          </Tabs>
        </div>
      </section>

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
