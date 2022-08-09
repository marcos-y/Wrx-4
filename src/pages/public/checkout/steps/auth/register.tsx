import { useSnackbar } from "notistack";
import { makeStyles } from "@material-ui/core";
import { ArrowRight } from "@material-ui/icons/";
import React, { FC, useState, MouseEvent } from "react";

import CustomButton from "../../commons/button";
import Input from "../../commons/input/customInput";
import PhoneSelect from "../../../../../components/atoms/phoneSelect/phoneSelect";

import useInput from "../../../../../hooks/useInput";
import authservice from "../../../../../services/auth";
import { saveDataAfterLogin } from "src/helpers/localStorage/localStorage";
import { basicValidation, confirmPassValidation, emailValidation, passValidation } from "../../../../../helpers/validations";
import { useUserInfoStore } from "src/stores/auth";

const useStyles = makeStyles((theme) => ({
  customContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

interface IProps {
  setCurrentView: (num: number) => void;
}

const Register: FC<IProps> = (props) => {
  const classes = useStyles();
  const { setUserInfo } = useUserInfoStore();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState<boolean>(false);

  const name = useInput({ validate: basicValidation });
  const email = useInput({ validate: emailValidation });
  const password = useInput({ validate: passValidation });
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const confirPassword = useInput({ validate: confirmPassValidation(password.value) });

  const onSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userInfo = {
        name: name.value,
        email: email.value,
        phoneNumber: phoneNumber,
        password: password.value,
      };

      await authservice.register(userInfo);
      const loginInfo = await authservice.login({ email: email.value, password: password.value });

      saveDataAfterLogin(loginInfo.token, loginInfo.userInfo);
      setUserInfo(loginInfo.userInfo);

      props.setCurrentView(1);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      enqueueSnackbar("Ha ocurrido un error, intente nuevamente", { variant: "error", preventDuplicate: true });
    }
  };

  return (
    <>
      <Input
        label="Nombre Completo"
        placeholder="Tomás Scotti"
        value={name.value}
        onBlur={name.onBlur}
        onFocus={name.onFocus}
        onChange={name.onChange}
        error={!name.error.isValid && name.error.message}
      />

      <div className={classes.customContainer}>
        <Input
          maxWidth
          placeholder="tomas@gmail.com"
          label="Correo Electrónico"
          value={email.value}
          onBlur={email.onBlur}
          onFocus={email.onFocus}
          onChange={email.onChange}
          error={!email.error.isValid && email.error.message}
        />

        <PhoneSelect phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
      </div>

      <div className={classes.customContainer}>
        <Input
          maxWidth
          type="password"
          label="Contraseña"
          placeholder="●●●●●●●●"
          value={password.value}
          onBlur={password.onBlur}
          onFocus={password.onFocus}
          onChange={password.onChange}
          error={!password.error.isValid && password.error.message}
        />

        <Input
          maxWidth
          placeholder="●●●●●●●●"
          type="password"
          label="Confirmar Contraseña"
          value={confirPassword.value}
          onBlur={confirPassword.onBlur}
          onFocus={confirPassword.onFocus}
          onChange={confirPassword.onChange}
          error={!confirPassword.error.isValid && confirPassword.error.message}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <CustomButton
          onClick={onSubmit}
          loading={loading}
          disabled={!email.error.isValid || !password.error.isValid || !confirPassword.error.isValid || !name.error.isValid || !phoneNumber}
        >
          Elegir métodos de envío
          <ArrowRight style={{ color: "white" }} fontSize="large" />
        </CustomButton>
      </div>
    </>
  );
};

export default Register;
