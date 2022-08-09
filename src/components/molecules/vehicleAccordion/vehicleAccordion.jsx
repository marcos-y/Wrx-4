// Utils & config
import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import fonts from "../../../styles/fonts.module.scss";

// External components
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

// Internal components
import Button from "../../atoms/button/button";

const useStyles = makeStyles((theme) => ({
  root: {},

  accordionExpanded: {
    margin: "0px!important",
  },

  summaryRoot: {
    backgroundColor: theme.palette.background.tertiary,
    minHeight: "0px",
  },

  summaryExpanded: {
    margin: "0px!important ",
    minHeight: "0px!important",
  },
  detailsRoot: {
    backgroundColor: theme.palette.background.tertiary,
    margin: "2px 0px 8px 0px",
  },
  accordionTitle: {
    backgroundColor: theme.palette.background.tertiary,
  },
}));

const VehicleAccordion = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(props.expanded);
  const { palette } = useTheme();

  return (
    <Accordion
      classes={{ root: classes.root, expanded: classes.accordionExpanded }}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary
        className={classes.accordionTitle}
        expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography style={{ fontFamily: fonts.paragraphFont, fontWeight: "bold", fontSize: "16px" }}>
          {props.title.toUpperCase() || "props.title"}
        </Typography>
      </AccordionSummary>
      {props.vehicles.map((vehicle, index) => (
        <AccordionDetails key={index} classes={classes.detailsRoot} style={{ marginTop: 12, marginBottom: 4 }}>
          <Container disableGutters>
            <Grid container spacing={4}>
              <Grid item xs={5} style={{ backgroundColor: palette.background.secondary }}></Grid>
              <Grid item xs={7} style={{ backgroundColor: palette.background.tertiary }}>
                <Typography variant="h6" align="left" style={{ fontSize: "16px", marginBottom: "16px", fontFamily: fonts.paragraphFont }}>
                  {vehicle.model || "Suzuki Jimny 2019"}
                </Typography>
                <Button
                  variant="contained"
                  style={{ backgroundColor: palette.tertiary.main, color: palette.text.primary, width: "100%" }}
                  onClick={() => props.handleSelectCar(vehicle.id)}
                >
                  SELECCIONAR
                </Button>
              </Grid>
            </Grid>
          </Container>
        </AccordionDetails>
      ))}
    </Accordion>
  );
};

VehicleAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  vehicles: PropTypes.arrayOf(PropTypes.shape({ model: PropTypes.string.isRequired, img: PropTypes.string.isRequired })),
  handleSelectCar: PropTypes.func.isRequired,
};

export default VehicleAccordion;
