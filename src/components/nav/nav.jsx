import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  padding: 0.5rem 3rem;
  justify-content: space-between;
  background-color: #708b75;
  color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const StyledUl = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
`;

function Nav() {
  return (
    <StyledNav>
      <h3>Logo </h3>
      <StyledUl>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/services">
          <li>Service</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </StyledUl>
    </StyledNav>
  );
}

export default Nav;
