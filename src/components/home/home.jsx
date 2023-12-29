import Button from "../button/button";
import { useNavigate } from "react-router-dom";
import logoImage from "../../assets/images/logo192.png";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("clicked");
    navigate("/about");
  };

  return (
    <>
      <h2>Horizon Cafe</h2>
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
      <img src={logoImage} alt="" />
      <Button handleClick={handleClick} value="Learn More" />
    </>
  );
}

export default Home;
