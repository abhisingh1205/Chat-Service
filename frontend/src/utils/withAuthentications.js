import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {Navigate} from 'react-router-dom'

const withAuthentication = (wrappedComponent) => {
  return function AuthComponent(props) {
    const [isAuthenticated, SetIsAuthenticated] = useState(false);

    const userList = useSelector((state) => state.userList);

    useEffect(() => {
      const { token } = userList;
      if (token) {
        SetIsAuthenticated(true)
      }
      else {
        SetIsAuthenticated(false)
      }
    }, [userList]);

    if (isAuthenticated) {
        return <wrappedComponent {...props}/>
    }
    else {
        return <Navigate to="/login" />
    }
  };

};

export default withAuthentication
