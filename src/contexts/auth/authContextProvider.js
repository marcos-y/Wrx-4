// Utils & Config
import React, { useState, useEffect } from "react";
import AuthContext from "./authContext";

import { verifyToken } from "../../helpers/serviceRequests/user";
import { clearLocalStorage, getToken, getUserInfo } from "../../helpers/localStorage/localStorage";

const AuthContextProvider = (props) => {
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [authIsLoading, setauthIsLoading] = useState(true);
  const [userInfo, setuserInfo] = useState({});

  useEffect(() => {
    const verifyTokenWithServer = async () => {
      const storedToken = await getToken();
      const userInfo = await getUserInfo();

      if (storedToken) {
        const res = await verifyToken(storedToken);

        if (res.status === 200) {
          setisAuthenticated(true);
          setuserInfo(userInfo);
        } else clearLocalStorage();
      }

      setauthIsLoading(false);
    };

    verifyTokenWithServer();
  }, []);

  return (
    <AuthContext.Provider value={[isAuthenticated, setisAuthenticated, authIsLoading, userInfo]}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
