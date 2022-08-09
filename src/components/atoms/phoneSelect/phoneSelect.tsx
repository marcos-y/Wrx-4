import React, { FC } from "react";
import "react-phone-input-2/lib/material.css";

import PhoneInput from "react-phone-input-2";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    border: "none",
    outline: "none",
    marginTop: 3,
    marginRight: 8,
    marginLeft: 8,


    [theme.breakpoints.down("md")]: {
      margin: '18px 0',
    },
  },
}));

interface IProps {
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
}

const PhoneSelect: FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <>
      <PhoneInput
        value={""}
        country={"es"}
        inputStyle={{
          width: "100%",
          color: "white",
          border: "none",
          borderRadius: 0,
          boxShadow: "none",
          padding: "14px 60px",
          backgroundColor: "#2F2F2F",
        }}
        specialLabel={""}
        containerClass={classes.root}
        dropdownStyle={{ color: "gray" }}
        onChange={(phone) => props.setPhoneNumber(phone)}
      />
    </>
  );
};

export default PhoneSelect;
