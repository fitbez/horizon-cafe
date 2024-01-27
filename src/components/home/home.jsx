import Button from "../button/button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledHeading = styled.h2`
  padding-top: 20px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #708b75;
  margin-right: 10px;
  color: #fff;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #526655;
  }
`;

function Home() {
  const navigate = useNavigate();

  const handleRegister = () => {
    console.log("clicked");
    navigate("/register");
  };

  const handleLogin = () => {
    console.log("clicked");
    navigate("/login");
  };

  return (
    <>
      <StyledHeading>Horizon Cafe</StyledHeading>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quam adipiscing
        vitae proin sagittis nisl rhoncus mattis rhoncus urna. Mattis
        pellentesque id nibh tortor id aliquet. Ipsum dolor sit amet consectetur
        adipiscing elit. Lacinia quis vel eros donec ac odio tempor orci
        dapibus. Urna molestie at elementum eu facilisis sed odio. Ut tellus
        elementum sagittis vitae et leo. Quam viverra orci sagittis eu volutpat.
        Consequat interdum varius sit amet mattis vulputate enim nulla.
      </p>
      <StyledButton onClick={handleLogin}>Login</StyledButton>
      <StyledButton onClick={handleRegister}>Register</StyledButton>
    </>
  );
}

export default Home;
