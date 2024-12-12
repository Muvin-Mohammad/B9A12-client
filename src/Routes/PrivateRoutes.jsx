

import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';





/*
1. only allow authenticated to visit the route
2.
3.Redirect user to the route they wanted to go before login
*/

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    console.log(user)
    const location = useLocation();

    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children;

};

export default PrivateRoute;