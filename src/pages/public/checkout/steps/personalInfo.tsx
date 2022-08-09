import React, { FC, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";

import LoginView from "./auth/login";
import Register from "./auth/register";
import Layout from "../commons/layout";

import { useAuthStore, useUserInfoStore } from "src/stores/auth";

const useStyles = makeStyles((theme) => ({
  link: {
    cursor: "pointer",
    fontWeight: "bold",
  },
}));

interface IProps {
  setCurrentView: (num: number) => void;
}

const PersonalInfo: FC<IProps> = (props) => {
  const classes = useStyles();

  const { isAuthenticated } = useAuthStore();
  const { userInfo } = useUserInfoStore();
  const [view, setView] = useState<"register" | "login">("register");

  return (
    <Layout>
      <Typography align="left" variant="body2" style={{ marginBottom: 18 }}>
        {view === "register" ? (
          <>
            ¿Ya tienes cuenta de WRX4?{" "}
            <span className={classes.link} onClick={() => setView("login")}>
              Has click aquí
            </span>
          </>
        ) : (
          <>
            {isAuthenticated ? (
              <>
                Ingresar como{" "}
                <span className={classes.link} onClick={() => setView("register")}>
                  {userInfo.fullName}
                </span>
              </>
            ) : (
              <>
                ¿Aún no tienes cuenta?{" "}
                <span className={classes.link} onClick={() => setView("register")}>
                  Registrate aquí
                </span>
              </>
            )}
          </>
        )}
      </Typography>

      {view === "register" ? <Register setCurrentView={props.setCurrentView} /> : <LoginView setCurrentView={props.setCurrentView} />}
    </Layout>
  );
};

export default PersonalInfo;
