import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [singer, setsinger] = useState("");
  var [album, setalbum] = useState("");
  var [dob, setdob] = useState("");
  var [place, setplace] = useState("");

  function edmConcert() {
    setsinger("Nationality- Canadian ");
    setalbum("Album- Justice");
    setdob("DOB- 1 March 1994");
    setplace("Rating-3.5/5");
  }
  function classicalConcert() {
    setsinger("Nationality- English ");
    setalbum("Album- One World");
    setdob("DOB-  22 August 1980 ");
    setplace("Rating-4/5");
  }
  function rockConcert() {
    setsinger("Nationality- American ");
    setalbum("Album- The Cherrytree Sessions");
    setdob("DOB-   2 June 1987");
    setplace("Rating-3/5");
  }

  return (
    <div className="App">
      <h1
        style={{
          fontStyle: "italic",
          fontSize: "4rem",
          textDecoration: "underline",
          backgroundColor: "orange",
          borderRadius: "2rem"
        }}
      >
        EDM Singers
      </h1>
      <h2 style={{ backgroundColor: "white" }}>{singer}</h2>
      <h2 style={{ backgroundColor: "white" }}>{album}</h2>
      <h2 style={{ backgroundColor: "white" }}>{dob}</h2>
      <h2 style={{ backgroundColor: "white" }}>{place}</h2>

      <button
        style={{
          margin: "0.5rem",
          backgroundColor: "gray",
          borderRadius: "0.5rem",
          padding: ".25rem",
          fontWeight: "bold",
          cursor: "pointer"
        }}
        onClick={() => edmConcert()}
      >
        {" "}
        Justin Biber
      </button>
      <button
        style={{
          margin: "0.5rem",
          backgroundColor: "gray",
          borderRadius: "0.5rem",
          padding: ".25rem",
          fontWeight: "bold",
          cursor: "pointer"
        }}
        onClick={() => classicalConcert()}
      >
        John Martin
      </button>
      <button
        style={{
          margin: "0.5rem",
          backgroundColor: "gray",
          borderRadius: "0.5rem",
          padding: ".25rem",
          fontWeight: "bold",
          cursor: "pointer"
        }}
        onClick={() => rockConcert()}
      >
        {" "}
        Matthew Koma
      </button>
    </div>
  );
}
