import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    if(!user) return <Navigate to={'/login'}/>
    return children;
};

export default PrivateRoute;