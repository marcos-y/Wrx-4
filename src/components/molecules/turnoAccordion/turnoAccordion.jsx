// Utils & Config
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

// External components
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import AddCircle from "@material-ui/icons/AddCircle";
import Button from "@material-ui/core/Button";

// Internal components
import Switch from "../../atoms/switch/switch";
import CustomTextMontserrat from "../../atoms/customText/CustomTextMontserrat";
import RangeHourTable from "./rangeHourTable";

const TurnoAccordion = (props) => {
  const { palette } = useTheme();
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: palette.fourthColor }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ display: "flex", alignItems: "center", backgroundColor: palette.thirdColor }}
        >
          <Switch />
          <CustomTextMontserrat
            text={props.turno ? props.turno.day.charAt(0).toUpperCase() + props.turno.day.slice(1) : "Lunes"}
            style={{ fontSize: 18, height: "fit-content", alignSelf: "center" }}
          />
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: palette.secondColor }}>
          <Grid container xs={12}>
            <RangeHourTable hourRanges={props.turno ? props.turno.hourRanges : []} handleEditHourRange={props.handleOpenEditModal} />
            <Grid item xs={12} style={{ display: "flex" }}>
              <Button
                variant="contained"
                size="small"
                disableElevation
                style={{ backgroundColor: "transparent", color: palette.fourthColor, justifySelf: "flex-start", fontStyle: "italic" }}
                startIcon={<AddCircle />}
                onClick={props.openHourRangeCreationModal}
              >
                Agregar franja horaria
              </Button>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

TurnoAccordion.propTypes = {
  turno: PropTypes.object.isRequired,
  openHourRangeCreationModal: PropTypes.func.isRequired,
  handleOpenEditModal: PropTypes.func.isRequired,
};

export default TurnoAccordion;
