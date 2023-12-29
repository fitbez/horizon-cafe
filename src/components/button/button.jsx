import styled from "styled-components";

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

const Button = ({ value, handleClick }) => {
  return <StyledButton onClick={handleClick}>{value}</StyledButton>;
};

export default Button;
