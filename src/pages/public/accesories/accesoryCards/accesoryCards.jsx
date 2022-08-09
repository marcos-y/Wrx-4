// Utils & config
import React from "react";
import { useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//External components
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

//Internal components
import PriceCard from "../../../../components/molecules/priceCard/priceCard";
import SelectInput from "../../../../components/atoms/selectInput/selectInput";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    paddingRight: "0px",
  },
}));

const AccesoryCards = () => {
  const theme = useTheme();
  const classes = useStyles();

  const accesories = [
    { name: "Paragolpe delantero", model: "Suzuki Jimny 2021", price: "100" },
    { name: "Paragolpe delantero", model: "Suzuki Jimny 2021", price: "100" },
    { name: "Paragolpe delantero", model: "Suzuki Jimny 2021", price: "100" },
    { name: "Paragolpe delantero", model: "Suzuki Jimny 2021", price: "100" },
    { name: "Paragolpe delantero", model: "Suzuki Jimny 2021", price: "100" },
    { name: "Paragolpe delantero", model: "Suzuki Jimny 2021", price: "100" },
    { name: "Paragolpe delantero", model: "Suzuki Jimny 2021", price: "100" },
    { name: "Paragolpe delantero", model: "Suzuki Jimny 2021", price: "100" },
  ];

  return (
    <>
      <Grid container spacing={2} style={{ display: "flex", flexWrap: "nowrap", alignItems: "center" }}>
        <Grid item xs={12} sm={4}>
          <FormControl
            className={classes.formControl}
            style={{
              marginLeft: "0px",
              width: "100%",
            }}
          >
            <SelectInput title={"Filtrar por marca"} />
          </FormControl>
        </Grid>

        <Grid xs={12} sm={4}>
          <FormControl className={classes.formControl} style={{ width: "100%" }}>
            <SelectInput title={"Filtrar por modelo"} />
          </FormControl>
        </Grid>
      </Grid>

      <Grid container style={{ display: "flex", alignItems: "center", marginBottom: theme.spacing(3) }}>
        <Grid item xs={12} sm={4}>
          <h4 style={{ textAlign: "left", color: "white" }}>Se han encontrado 8 accesorios</h4>
        </Grid>

        <Grid item xs={12} sm={4}></Grid>

        <Grid item xs={12} sm={4}>
          <FormControl className={classes.formControl} style={{ width: "100%" }}>
            <SelectInput title={"Ordenar por precio mas bajo"} />
          </FormControl>
        </Grid>
      </Grid>

      <Grid container xs={12} spacing={1}>
        {accesories.map((accesory, index) => (
          <Grid item xs={6} sm={3}>
            <PriceCard key={index} accesory={accesory} />
          </Grid>
        ))}
      </Grid>

      <Button
        style={{
          backgroundColor: theme.palette.background.tertiary,
          color: "white",
          margin: "auto",
          marginTop: theme.spacing(6),
          height: theme.spacing(6),
        }}
      >
        CARGAR MÁS ACCESORIO #1
      </Button>
    </>
  );
};

export default AccesoryCards;
