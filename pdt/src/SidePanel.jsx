import React from "react";
import msit from "./static/msit.png";
const SidePanel = () => {
  return (
    <div
      style={{
        // backgroundColor: "#000",
        border: "2px solid #000",
        width: "250px",
        height: "350px",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img style={{ width: "150px" }} src={msit} alt="msit logo" />
      </div>
      <div style={{ fontSize: "1.2rem", margin: "30px" }}>
        <p style={{ textDecoration: "underline", fontWeight: "600" }}>Mentor</p>
        <p style={{  fontWeight: "600",marginBottom:"10px" }}>Prof.(Dr.) Sudip Dogra</p>
        <p style={{ textDecoration: "underline", fontWeight: "600" }}>
          Team Members
        </p>
        <ul>
          <li>Sarban Bose</li>
          <li>Shubhojit Halder</li>
          <li>Abhirup Banerjee</li>
        </ul>
      </div>
    </div>
  );
};

export default SidePanel;
