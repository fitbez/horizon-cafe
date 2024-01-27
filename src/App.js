import "./App.css";
import About from "./components/about/about";
import Home from "./components/home/home";
import Nav from "./components/nav/nav";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Services from "./components/services/services";
import Register from "./components/register/register";
import AddProduct from "./components/add-services/add-services";
import Login from "./components/login/login";

import ProtectedRoute from "./components/protected-route/protected-route";

const StyledContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f4f4f4;
  height: 100vh;
  padding: 0rem 3rem;
`;

function App() {
  return (
    <div className="App">
      <Nav />
      <StyledContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/add-product"
            element={
              <ProtectedRoute>
                <AddProduct />
              </ProtectedRoute>
            }
          />
        </Routes>
      </StyledContainer>
    </div>
  );
}

export default App;
