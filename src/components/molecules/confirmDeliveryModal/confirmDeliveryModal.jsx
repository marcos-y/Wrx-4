/* eslint-disable no-self-assign */
// Utils & Config
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getDataForConfirmingADelivery, confirmDelivery } from "../../../helpers/serviceRequests/deliveries";

// External components
import Grid from "@material-ui/core/Grid";

// Internal components
import Dialog from "../../atoms/dialog/dialog";
import ModalWithRoutes from "./modalWithRoutes";
import ModalWithoutRoutes from "./modalWithoutRoutes";

const ConfirmDeliveryModal = (props) => {
  const [selectedDriver, setselectedDriver] = useState("");
  const [selectedRouteId, setselectedRouteId] = useState("");
  const [routes, setroutes] = useState([]);
  const [drivers, setdrivers] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [creatingNewRoute, setcreatingNewRoute] = useState(false);
  const [createNewRouteOptionSelected, setcreateNewRouteOptionSelected] = useState(false);

  useEffect(() => {
    const getInitialData = async () => {
      const res = await getDataForConfirmingADelivery(props.delivery);

      if (res.status === 200) {
        setroutes(res.data.routes);
        // setselectedRouteId(res.data.routes[0].id);
        setdrivers(res.data.drivers);
      }
      setisLoading(false);
    };

    getInitialData();
  }, [props.delivery]);

  const handleConfirm = async () => {
    var driverId = selectedDriver ? selectedDriver.id : "";
    var routeId;

    if (createNewRouteOptionSelected) {
      routeId = "";
      driverId = driverId;
    } else {
      driverId = driverId;
      routeId = selectedRouteId;
    }
    const res = await confirmDelivery(props.delivery.id, routeId, driverId);

    if (res.status === 200) {
      props.reload();
      props.handleClose();
      props.handleDetailClose();
      props.setalert({ open: true, text: "Operación exitosa", type: "success" });
    } else {
      props.setalert({ open: true, text: res.data.message, type: "error" });
    }
  };

  const handleSelectDriver = (driver) => {
    setselectedDriver(driver);
  };

  const handleSelectRoute = (routeId) => {
    setselectedRouteId(routeId);
    setcreateNewRouteOptionSelected(false);
  };

  const handleNewRouteOption = () => {
    setselectedRouteId("");
    setcreateNewRouteOptionSelected(true);
  };

  const noneRouteContent = (
    <ModalWithoutRoutes
      selectedDriver={selectedDriver}
      handleSelectDriver={handleSelectDriver}
      deliveryDate={props.delivery.date}
      drivers={drivers}
    />
  );

  const withRoutesContent = (
    <ModalWithRoutes
      creatingNewRoute={creatingNewRoute}
      deliveryDate={props.delivery.date}
      drivers={drivers}
      handleClickOnCreateRoute={() => setcreatingNewRoute(true)}
      handleSelectDriver={handleSelectDriver}
      handleNewRouteOption={handleNewRouteOption}
      createNewRouteOptionSelected={createNewRouteOptionSelected}
      routes={routes}
      selectedDriver={selectedDriver}
      selectedRouteId={selectedRouteId}
      handleSelectRoute={handleSelectRoute}
    />
  );

  return (
    <>
      <Dialog
        open={props.open}
        dialogTitle="Asignar hoja de ruta"
        handleClose={props.handleClose}
        confirmButtonText="ASIGNAR HOJA DE RUTA"
        cancelButtonText="VOLVER"
        confirmHandler={handleConfirm}
        confirmButtonDisabled={!selectedDriver && !selectedRouteId}
      >
        {!isLoading && (
          <Grid container xs={12} spacing={2} style={{ margin: 0 }}>
            {routes.length > 0 ? withRoutesContent : noneRouteContent}
          </Grid>
        )}
      </Dialog>
    </>
  );
};

ConfirmDeliveryModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  confirmHandler: PropTypes.func.isRequired,
  delivery: PropTypes.object.isRequired,
  setalert: PropTypes.func.isRequired,
};

export default ConfirmDeliveryModal;
