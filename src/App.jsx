// Utils & Confit
import "./App.scss";

import { useSnackbar } from "notistack";
import { useTheme } from "@material-ui/core";
import { createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";

// Internal components
import { verifyToken } from "./helpers/serviceRequests/user";
import { useAuthStore, useUserInfoStore } from "./stores/auth";
import PublicRouter from "./components/layout/publicRouter/publicRouter";
import PrivateRouter from "./components/layout/privateRouter/privateRouter";
import { clearLocalStorage, getToken, getUserInfo } from "./helpers/localStorage/localStorage";

const history = createBrowserHistory();

const App = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuthStore(({ isAuthenticated, setIsAuthenticated }) => ({
    isAuthenticated,
    setIsAuthenticated,
  }));

  const [isLoading, setisLoading] = useState(true);
  const setUserInfo = useUserInfoStore((state) => state.setUserInfo);
  const { palette } = useTheme();

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const verifyAuthentication = async () => {
      const token = await getToken();

      if (!token) {
        setisLoading(false);
        return;
      }

      const res = await verifyToken(token);

      if (res?.status === 200) {
        setIsAuthenticated(true);
        setUserInfo(await getUserInfo());
      } else {
        await clearLocalStorage();
      }

      setisLoading(false);
    };
    verifyAuthentication();
  }, [setIsAuthenticated, setUserInfo]);

  const handleSubmit = async () => {
    // const res = await login(email, password)
    const res = { status: 500 };

    if (res.status === 200) {
      alert("guardar la data");
    } else {
      enqueueSnackbar("Mensaje de error", { variant: "errror" });
    }
  };

  return (
    <div className="App" style={{ backgroundColor: palette.background.default }}>
      <BrowserRouter history={history}>
        {!isLoading && !isAuthenticated && <PublicRouter />}
        {!isLoading && isAuthenticated && <PrivateRouter />}
      </BrowserRouter>
    </div>
  );
};

export default App;
