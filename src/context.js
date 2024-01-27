import { useState, createContext, useEffect } from "react";
import axios from "axios";

// Create the context
export const HorizonContext = createContext();

console.log("Horizon context", HorizonContext);

// Create a provider component
export const HorizonProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.error("error when fetching data", err));
  }, []);

  // console.log("products", products);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (token) => {
    localStorage.setItem("token", token);

    setIsAuthenticated(true);
  };
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <HorizonContext.Provider
      value={{
        products,
        setProducts,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {props.children}
    </HorizonContext.Provider>
  );
};
