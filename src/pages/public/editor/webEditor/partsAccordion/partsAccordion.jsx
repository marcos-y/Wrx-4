// Utils & config
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import fonts from "../../../../../styles/fonts.module.scss";

// External components
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

// Internal components
import AccordionDetails from "./accordionDetails/accordionDetails";

const useStyles = makeStyles((theme) => ({
  root: {},

  accordionExpanded: {
    margin: "0px!important",
  },

  summaryRoot: {
    backgroundColor: theme.palette.background.quaternary,
    minHeight: "0px",
  },

  summaryExpanded: {
    margin: "0px!important ",
    minHeight: "0px!important",
  },

  detailsRoot: {
    marginTop: 15,
  },
  accordionTitle: {
    backgroundColor: theme.palette.background.tertiary,
  },
}));

const VehicleAccordion = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(props.expanded);

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
      {props.parts.map((part, index) => (
        <AccordionDetails
          key={index}
          classes={{ root: classes.detailsRoot }}
          handleViewPartInfo={() => props.handleViewPartInfo(part)}
          part={part}
          addToShoppingCart={() => props.addToShoppingCart(part)}
          removeFromShoppingCart={() => props.removeFromShoppingCart(part)}
          selectedVehicleParts={props.selectedVehicleParts}
        />
      ))}
    </Accordion>
  );
};

VehicleAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ),
  selectedVehicleParts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ),
  addToShoppingCart: PropTypes.func.isRequired,
  removeFromShoppingCart: PropTypes.func.isRequired,
  handleViewPartInfo: PropTypes.func.isRequired,
};

export default VehicleAccordion;
