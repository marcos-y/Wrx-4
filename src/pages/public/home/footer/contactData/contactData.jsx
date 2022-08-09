// Utils & config
import React from "react";
import { makeStyles, useMediaQuery } from "@material-ui/core";

// External components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Mail from "@material-ui/icons/Mail";
import Phone from "@material-ui/icons/Phone";
import LocationOn from "@material-ui/icons/LocationOn";

// Internal components

const useStyles = makeStyles((theme) => ({
  iconRoot: {
    minWidth: 32,
  },
  listItemRoot: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    textAlign: "center",
    alignItems: "center",
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 0,
    textDecoration: "none",
    [theme.breakpoints.up("md")]: {
      width: "fit-content",
      justifyContent: "flex-start",
      fontSize: 14,
    },
  },
  listItemTextRoot: {
    flex: "0 0 auto",
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4,
  },

  primary: {
    color: theme.palette.text.primary,
    [theme.breakpoints.up("md")]: {
      fontSize: 14,
    },
  },
}));

const ContactData = (props) => {
  const classes = useStyles();
  const isMdUp = useMediaQuery("(min-width:960px)");

  return (
    <div style={{ display: "flex", justifyContent: isMdUp ? "flex-start" : "center" }}>
      <List style={{ width: "fit-content" }}>
        {items.map((item, index) => (
          <ListItem key={index} classes={{ root: classes.listItemRoot }}>
            <ListItemIcon classes={{ root: classes.iconRoot }}>{item.icon}</ListItemIcon>
            <ListItemText
              classes={{
                root: classes.listItemTextRoot,
                primary: classes.primary,
              }}
              primary={item.text}
              style={{ width: "fit-content" }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

ContactData.propTypes = {};

export default ContactData;

const items = [
  { icon: <Mail style={{ color: "#fff" }} />, text: "aloha@novolabs.xyz" },
  { icon: <Phone style={{ color: "#fff" }} />, text: "(+34) 686 212 121" },
  { icon: <LocationOn style={{ color: "#fff" }} />, text: "Valencia, España" },
];
