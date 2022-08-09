// Utils & config
import React, { useState } from "react";
import PropTypes from "prop-types";

// External components
import Container from "@material-ui/core/Container";

// Internal components
import CustomTabs from "../../../../../components/molecules/tabs/tabs";
import Dialog from "../../../../../components/atoms/dialog/dialog";
import Alert from "../../../../../components/atoms/snackbar/snackbar";
import GeneralInformation from "./generalInformation";
import TechnicalInformation from "./technicalInformation/technicInformation";
import MountingInstructions from "./mountingInstructions/mountingInstructions";

const VehiclePartInfoModal = (props) => {
  const [alert, setalert] = useState({ open: false, text: "", type: "" });
  const [selectedTab, setselectedTab] = useState(tabOptions[0]);

  var activeInformation;

  switch (selectedTab) {
    case tabOptions[0]:
      activeInformation = <GeneralInformation description={props.vehiclePart.description} images={[]} />;
      break;

    case tabOptions[1]:
      activeInformation = (
        <TechnicalInformation
          acabado={props.vehiclePart.information.acabado}
          cabestrante={props.vehiclePart.information.cabestrante}
          dimensions={props.vehiclePart.information.dimensions}
          ilumination={props.vehiclePart.information.ilumination}
          mountingTime={props.vehiclePart.information.mountingTime}
          tornilleria={props.vehiclePart.information.tornilleria}
          vehicleName={props.vehiclePart.information.vehicleName}
          weight={props.vehiclePart.information.weight}
        />
      );
      break;

    case tabOptions[2]:
      activeInformation = (
        <MountingInstructions instructions={props.vehiclePart.instructions} instructionsFileUrl={props.vehiclePart.instructionsFilePath} />
      );
      break;

    default:
      break;
  }

  return (
    <Dialog
      confirmHandler={props.handleClose}
      open={props.open}
      dialogTitle={props.vehiclePart.name}
      handleClose={props.handleClose}
      maxWidth="md"
      fullWidth={true}
    >
      <CustomTabs options={tabOptions} value={tabOptions.indexOf(selectedTab)} handleTabSelect={setselectedTab} />
      <Container style={{ minHeight: 300 }}>{activeInformation}</Container>
      {alert.open && (
        <Alert open={alert.open} text={alert.text} type={alert.type} handleClose={() => setalert({ open: false, text: "", type: "" })} />
      )}
    </Dialog>
  );
};

VehiclePartInfoModal.propTypes = {
  vehiclePart: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default VehiclePartInfoModal;

const tabOptions = ["INFORMACIÓN GENERAL", "FICHA TÉNCICA", "INSTRUCCIONES DE MONTAJE"];
