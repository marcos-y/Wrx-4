// Utils & config
import React, { useEffect, useState, useContext } from "react";
import { eventDispatcher } from "../../../helpers/playcanvas/eventDispatcher";
import PlaycanvasContext from "../../../contexts/playCanvas/playcanvasContext";
import { EPlaycanvasEvents } from "../../../playcanvas";
import { useQuery } from "../../../hooks/hooks";
import { getVehicleById } from "../../../helpers/serviceRequests/vehicle";

// External components

// Internal components
import Alert from "../../../components/atoms/snackbar/snackbar";

// Icons & images
// import wrx4Logo from "../../../assets/images/wrx4_logo.svg";

const ShareEditor = (props) => {
  const [selectedVehicle, setselectedVehicle] = useState("");
  const [alert, setalert] = useState({ open: false, type: "", text: "" });
  const playcanvas = useContext(PlaycanvasContext);
  const queryParams = useQuery();

  useEffect(() => {
    const getVehicle = async () => {
      const allQueryParams = queryParams.entries();
      const vehiclePartsIds = [];
      for (let pair of allQueryParams) {
        if (pair[0] !== "vehicleId") {
          vehiclePartsIds.push(pair[1]);
        }
      }

      const res = await getVehicleById(queryParams.get("vehicleId"), vehiclePartsIds);

      if (res.status === 200) {
        setselectedVehicle(res.data);
        playcanvas.connectToIframe();

        for (let part of res.data.parts) {
          console.log("La parte: ", part[1][0]);
          const event = eventDispatcher(EPlaycanvasEvents.AddVehiclePart, part[1][0]);
          playcanvas.parseMessage(event);
        }
      } else {
        setalert({ open: true, type: "error", text: "El vehículo ingresado no existe" });
      }
    };

    if (!queryParams.get("vehicleId")) {
      setalert({ open: true, type: "error", text: "No se especificó un vehículo para mostrar" });
      return;
    }

    getVehicle();
  }, [playcanvas, queryParams]);

  return (
    <div style={{ flexGrow: 1, height: "100vh" }}>
      <iframe title="iframe-1" id="game-iframe" src={selectedVehicle.playCanvasUrl} height="100%" width="100%" frameBorder={0}></iframe>
      {alert.open && <Alert open={alert.open} type={alert.type} text={alert.text} />}
    </div>
  );
};

ShareEditor.propTypes = {};

export default ShareEditor;
