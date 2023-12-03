import React, { useContext } from 'react';
import { AuthProvider } from '../../share/Context';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthProvider)
    const location = useLocation()
    console.log(location);
    if(loading){
        <div>Loading .... </div>
    }
    if(user?.email){
        return children
    }
    return <Navigate to='/login' ></Navigate>
};

export default PrivateRoute;