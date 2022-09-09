import React, { useState, useEffect } from "react";
import FooterComp from "../Footer/FooterComp";
import NavBarComp from "../NavBar/NavBarComp";
import hero from "../images/pic.jpg";
import styles from "./mainchar.module.css";
import harry from "../images/harry.jpg";
import ron from "../images/ron.jpg";
import hermione from "../images/hermione.jpg";
import fredGeorge from "../images/Fred&George.png";
import draco from "../images/draco.png";
import mustNotBeNamed from "../images/mustNotBeNamed.png";





const MainCharComp = () => {
  const [data, setData] = useState([]);
  const pic = [harry, ron, hermione, fredGeorge, draco, mustNotBeNamed];
  
 const [searchResult, setSearchResult] = useState("");



let char = data.map((char, index) => {
            return (
              <div className={styles.box}>
                <figure>
                  <img src={pic[char.id]} />
                </figure>
                <section>
                  <h1 style={{ color: "rgb(248, 224, 193)" }}>{char.name}</h1>
                  <p>{char.info}</p>
                 
                </section>
              </div>
            );
          })

useEffect(() => {
  setData(require("../charData.json"));
}, [searchResult]);



const search = () => {
  if (searchResult === "") {
    
    setData(require("../charData.json"));
  } else {
    //  searchResult
   let result = data.filter(x => x.name.toLowerCase().includes(searchResult.toLowerCase())
   );
    setData(result);
  }
};
  return (
    <div>
      <NavBarComp></NavBarComp>
      <figure className={styles.fig1}>
        <img src={hero} />
      </figure>

      {/* Search  */}
      <div className={styles.search}>
        <span>Find a character : </span>
        <input
          type="text"
          placeholder="Search by name"
          onChange={(e) => setSearchResult(e.target.value)}
        />
        <button onClick={search}>Find</button>
      </div>
      {/* Search End  */}
      
        <div>
        
          {char}
        </div>
   
      <FooterComp></FooterComp>
    </div>
  );
};

export default MainCharComp;
