import Button from "../button/button";
import coffeBeans from "../../assets/images/coffe-beans.jpg";
import styled from "styled-components";

const StyledHero = styled.header`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
`;

const StyledHeroContent = styled.section`
  text-align: left;
  flex: 2;
`;

const StyledImage = styled.img`
  flex: 1;
  width: 150px;
  height: 200px;
`;

function Hero() {
  return (
    <StyledHero>
      <StyledHeroContent>
        <h2>Horizon Cafe</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam
          adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna.
          Mattis pellentesque id nibh tortor id aliquet. Ipsum dolor sit amet
          consectetur adipiscing elit. Lacinia quis vel eros donec ac odio
          tempor orci dapibus. Urna molestie at elementum eu facilisis sed odio.
          Ut tellus elementum sagittis vitae et leo. Quam viverra orci sagittis
          eu volutpat. Consequat interdum varius sit amet mattis vulputate enim
          nulla.
        </p>
        <Button value="View more" />
      </StyledHeroContent>
      <StyledImage src={coffeBeans} alt="" />
    </StyledHero>
  );
}

export default Hero;
