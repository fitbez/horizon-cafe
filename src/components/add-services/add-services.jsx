import { useState } from "react";
import Button from "../button/button";
import axios from "axios";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
`;
const StyledInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
`;

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/products/product", product)
      .then((response) => {
        alert("Product is succeffuly added");
        setProduct({
          name: "",
          description: "",
          price: "",
          imageUrl: "",
        });
      })
      .catch((error) =>
        console.error("Something went wrong please try again", error)
      );
  };

  return (
    <>
      <h3>Add Product</h3>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          name="name"
          placeholder="Name"
          value={product.name}
          onChange={handleChange}
        />
        <StyledInput
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        />
        <StyledInput
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
        />
        <StyledInput
          name="imageUrl"
          placeholder="Image URl"
          value={product.imageUrl}
          onChange={handleChange}
        />
        <Button type="submit" value="Add Product" />
      </StyledForm>
    </>
  );
}

export default AddProduct;
