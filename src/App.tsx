import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";
import NavBar from "./components/NavBar";
import Album from "./components/Album";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Album />
      </div>
    </>
  );
}

export default App;
