import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { HorizonContext } from "../../context";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(HorizonContext);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace="true" />;
  }

  return children;
};

export default ProtectedRoute;
