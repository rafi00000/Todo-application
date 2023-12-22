import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const navigate = useNavigate();
    if(loading){
        return <span>Loading</span>;
    }
    else if(!user){
        return navigate('/login');
    }
    else{
        return children;
    }
    

};

export default PrivateRoute;