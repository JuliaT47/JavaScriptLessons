import { Navigate } from "react-router";

const PrivateRoutes = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" repalce={true} />;
  }
  return children;
};
export default PrivateRoutes;
