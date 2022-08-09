// Utils & config
import React from "react";
import { useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//External components
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    fontsize: 16,
    textAlign: "left",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    paddingRight: "0px",
  },
}));

const SelectInput = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Select
        MenuProps={{
          disableScrollLock: true,
        }}
        disableUnderline
        value={age}
        onChange={handleChange}
        displayEmpty
        className={classes.selectEmpty}
        style={{ backgroundColor: theme.palette.background.secondary }}
      >
        <MenuItem value="">{props.title}</MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </>
  );
};

export default SelectInput;
