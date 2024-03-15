import React from "react";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ImageUploader from "./ImageUploader";
import SidePanel from "./SidePanel";
const App = () => {
  return (
    <div
      className="App"
      style={{
        background: "#f4f4f4",
        margin: 0,
        padding: 0,
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          padding:"20px",
          fontSize: "2rem",
          fontWeight: "600",
          color: "#0f0f0f",
          textAlign: "center",
          background:"#148508",
          color:"#fff"
        }}
      >
        Crop & Disease Detection Using Deep Learning
      </div>
      <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
        <ImageUploader />
        <SidePanel />
      </div>
    </div>
  );
};

export default App;
