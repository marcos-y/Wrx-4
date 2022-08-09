import { ChangeEvent, useEffect, useState } from "react";

interface IError {
  isValid: boolean;
  message: string | "";
}

interface IProps {
  defaultValue?: string;
  validate?: (value: string) => IError;
}

const useInput = ({ validate, defaultValue = "" }: IProps) => {
  const [value, setValue] = useState<string>(defaultValue);
  const [error, setError] = useState<IError>({ isValid: false, message: "" });

  useEffect(() => {
    return () => {
      setValue("");
      setError({ isValid: false, message: "" });
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };

  const handleBlur = () => {
    if (validate) {
      const validation = validate(value);

      setError({
        isValid: validation.isValid,
        message: validation.message,
      });
    }
  };

  const handleFocus = () => {
    setError({ isValid: false, message: "" });
  };

  return {
    value,
    error,
    onBlur: handleBlur,
    setValue: setValue,
    onFocus: handleFocus,
    onChange: handleChange,
  };
};

export default useInput;
