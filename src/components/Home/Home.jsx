// src/components/Home/Home.js
import React from "react";
import Section from "../Section/Section";

const Home = () => {
  return (
    <div>
      <Section 
        title="Top Albums" 
        endpoint="https://qtify-backend-labs.crio.do/albums/top"
      />
    </div>
  );
};

export default Home;
