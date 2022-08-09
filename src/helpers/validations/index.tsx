interface IResponse {
  isValid: boolean;
  message: string;
}

const empty = () => ({ isValid: false, message: "Campo obligatorio" });

export const emailValidation = (value: string): IResponse => {
  if (!value) return empty();

  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (value.length > 0) {
    if (!re.test(value.toLowerCase().trim())) {
      return {
        isValid: false,
        message: "Ingrese un email válido",
      };
    }
  }

  return {
    isValid: true,
    message: "",
  };
};

export const passValidation = (value: string): IResponse => {
  if (!value) return empty();

  if (value.length > 0) {
    const numbers = value.split("").filter((letra) => !isNaN(parseInt(letra)));

    const isLowerCase = (str: string) => {
      return str === str.toLowerCase() && str !== str.toUpperCase();
    };

    const upperCase = value
      .split("")
      .map((str) => isLowerCase(str))
      .filter((bool) => bool);

    if (value.length < 8 || !numbers.length || !upperCase.length) {
      return {
        isValid: false,
        message: "La contraseña debe tener al menos 8 caracteres, 1 letra mayúscula y 1 número",
      };
    }
  }

  return {
    isValid: true,
    message: "",
  };
};

export const confirmPassValidation = (pass: string) => {
  return (confirmPass: string) => {
    if (pass !== confirmPass || !confirmPass) {
      return {
        isValid: false,
        message: "Las contraseñas no coinciden",
      };
    }

    return {
      message: "",
      isValid: true,
    };
  };
};

export const basicValidation = (value: string): IResponse => {
  if (!value) return empty();

  return {
    message: "",
    isValid: true,
  };
};
