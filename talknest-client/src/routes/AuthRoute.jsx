import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user) return <Navigate to={"/chat"} />;
  return children;
};

export default AuthRoute;
