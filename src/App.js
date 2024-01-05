import "./App.css";
import About from "./components/about/about";
import Home from "./components/home/home";
import Nav from "./components/nav/nav";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Services from "./components/services/services";
import { useState } from "react";
import { services } from "./data";

const StyledContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f4f4f4;
  height: 100vh;
  padding: 0rem 3rem;
`;

const serviceData = services;

function App() {
  console.log("service data", serviceData);
  const [services, setServices] = useState(serviceData);

  return (
    <div className="App">
      <Nav />
      <StyledContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/services"
            element={<Services serviceData={services} test="testing" />}
          />
        </Routes>
      </StyledContainer>
    </div>
  );
}

export default App;
