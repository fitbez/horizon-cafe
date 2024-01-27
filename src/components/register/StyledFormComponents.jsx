import styled from "styled-components";

export const Form = styled.form`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #004494;
  }
`;
export const Title = styled.h2`
  text-align: center;
  color: #333;
`;
export const ErrorMessage = styled.div`
  background-color: #ffdddd;
  color: #d8000c;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
`;
export const SuccessMessage = styled.div`
  background-color: #ddffdd;
  color: #270;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
`;
