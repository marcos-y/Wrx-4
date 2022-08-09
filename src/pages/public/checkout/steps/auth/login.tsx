import { useSnackbar } from "notistack";
import { ArrowRight } from "@material-ui/icons";
import React, { FC, useState, MouseEvent } from "react";

import CustomButton from "../../commons/button";
import Input from "../../commons/input/customInput";

import useInput from "../../../../../hooks/useInput";
import authService from "../../../../../services/auth";
import { saveDataAfterLogin } from "src/helpers/localStorage/localStorage";
import { emailValidation, passValidation } from "../../../../../helpers/validations";
import { useUserInfoStore } from "src/stores/auth";

interface IProps {
  setCurrentView: (num: number) => void;
}

const LoginView: FC<IProps> = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const { setUserInfo } = useUserInfoStore();
  const [loading, setLoading] = useState<boolean>(false);

  const email = useInput({ validate: emailValidation });
  const password = useInput({ validate: passValidation });

  const onSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userInfo = {
        email: email.value,
        password: password.value,
      };

      const res = await authService.login(userInfo);
      saveDataAfterLogin(res.token, res.userInfo);
      setUserInfo(res.userInfo);

      props.setCurrentView(1);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      enqueueSnackbar("credenciales inválidas", { variant: "error", preventDuplicate: true });
    }
  };

  return (
    <>
      <Input
        label="Correo Electrónico"
        placeholder="tomas@gmail.com"
        value={email.value}
        onBlur={email.onBlur}
        onFocus={email.onFocus}
        onChange={email.onChange}
        error={!email.error.isValid && email.error.message}
      />

      <Input
        type="password"
        label="Contraseña"
        placeholder="●●●●●●●●"
        value={password.value}
        onBlur={password.onBlur}
        onFocus={password.onFocus}
        onChange={password.onChange}
        error={!password.error.isValid && password.error.message}
      />

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <CustomButton onClick={onSubmit} loading={loading} disabled={!email.error.isValid || !password.error.isValid}>
          Siguiente
          <ArrowRight style={{ color: "white" }} fontSize="large" />
        </CustomButton>
      </div>
    </>
  );
};

export default LoginView;
