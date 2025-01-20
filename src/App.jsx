import { useState } from "react";
import "./App.css";
import Mynavbar from "./components/Mynavbar";
import Myfooter from "./components/Myfooter";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Mynavbar />
      <div className="card">
        <Card />
        <Card />
        <Card />
      </div>

      <Myfooter />
    </>
  );
}

export default App;
