// Utils & config
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

// External components
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

// Internal components

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.secondary,
  },

  accordionExpanded: {
    margin: "0px!important",
  },

  summaryExpanded: {
    margin: "0px!important ",
    minHeight: "0px!important",
  },
  detailsRoot: {
    backgroundColor: theme.palette.background.tertiary,
    margin: "4px 0px 4px 0px",
    padding: "24px",
  },
}));

const FaqAccordion = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Accordion
      classes={{ root: classes.root, expanded: classes.accordionExpanded }}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary
        expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        style={{ padding: "8px 24px" }}
      >
        <Typography color="textPrimary" style={{ fontWeight: "600", textAlign: "left" }}>
          {props.question.toUpperCase() || "props.title"}
        </Typography>
      </AccordionSummary>
      <AccordionDetails classes={{ root: classes.detailsRoot }}>
        <Typography color="textSecondary" style={{ textAlign: "left" }}>
          {props.answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

FaqAccordion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FaqAccordion;
