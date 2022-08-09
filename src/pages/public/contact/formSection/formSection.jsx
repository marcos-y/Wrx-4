// Utils & config
import React from "react";
import { useTheme } from "@material-ui/core";

//External components
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ArrowForward from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Hidden from "@material-ui/core/Hidden";

//Internal components
import Button from "../../../../components/atoms/button/button";
import Mail from "@material-ui/icons/Mail";
import LocationOn from "@material-ui/icons/LocationOn";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneSelect from "../../../../components/atoms/phoneSelect/phoneSelect";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginTop: theme.spacing(4),
      width: "100%",
      height: "40px",
    },
    "& .MuiInputBase-root": {
      alignItems: "start",
    },
  },
  iconRoot: {
    minWidth: 32,
    float: "right",
  },
  listItemRoot: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    alignItems: "center",
    textAlign: "center",
    textDecoration: "none",
    padding: "none",
    [theme.breakpoints.up("md")]: {
      width: "fit-content",
      display: "flex",
      fontSize: 14,
    },
  },
  listItemTextRoot: {
    maxWidth: 150,
  },

  primary: {
    color: theme.palette.text.secondary,
    [theme.breakpoints.up("md")]: {
      fontSize: 14,
    },
  },
}));

const items = [
  { icon: <WhatsAppIcon style={{ color: "#FFFFFF" }} />, text: "(+34) 686 212 121" },
  { icon: <Mail style={{ color: "#FFFFFF" }} />, text: "info@wrx4.com" },
  { icon: <LocationOn style={{ color: "#FFFFFF" }} />, text: "Liria,Valencia" },
];

const FormSection = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md" style={{ marginBottom: theme.spacing(1), marginTop: theme.spacing(7), padding: theme.spacing(4) }}>
        <Grid xs={12}>
          <TextField
            id="outlined-secondary"
            variant="outlined"
            label="Nombre completo"
            color="primary"
            style={{ width: "100%", backgroundColor: theme.palette.background.secondary }}
          />
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} style={{ marginTop: theme.spacing(5) }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Correo electrónico"
              color="primary"
              style={{ width: "100%", backgroundColor: theme.palette.background.secondary }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            style={{
              marginTop: theme.spacing(5),
              display: "flex",
              justifyContent: "flexStart",
              flexDirection: "column",
            }}
          >
            <Hidden smDown>
              <PhoneSelect width={"450px"} />
            </Hidden>

            <Hidden mdUp>
              <PhoneSelect width={"300px"} />
            </Hidden>
          </Grid>
        </Grid>

        <Grid item xs={12} style={{ marginTop: theme.spacing(5), marginBottom: theme.spacing(7) }}>
          <TextField
            style={{ backgroundColor: theme.palette.background.secondary, width: "100%" }}
            id="outlined-multiline-static"
            label="Comentarios (opcional)"
            multiline
            rows={4}
            rowsMax={10}
            variant="outlined"
            color="primary"
          />
        </Grid>

        <Button
          variant="contained"
          color="primary"
          endIcon={<ArrowForward />}
          style={{ marginTop: theme.spacing(5) }}
          onClick={() => alert("Not implemented yet")}
        >
          ENVIAR MENSAJE
        </Button>

        <div>
          <List
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              marginTop: theme.spacing(8),
            }}
          >
            {items.map((item, index) => (
              <ListItem key={index} classes={{ root: classes.listItemRoot }}>
                <ListItemIcon classes={{ root: classes.iconRoot }}>{item.icon}</ListItemIcon>
                <ListItemText
                  classes={{
                    root: classes.listItemTextRoot,
                    primary: classes.primary,
                  }}
                  primary={item.text}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Container>
    </>
  );
};

export default FormSection;
