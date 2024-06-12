import { useContext } from "react";
import { Navigate } from "react-router";
import AuthContext from "./authContext";

const PrivateRoutes = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default PrivateRoutes;
