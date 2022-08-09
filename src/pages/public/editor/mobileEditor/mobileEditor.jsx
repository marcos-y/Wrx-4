/* eslint-disable react-hooks/exhaustive-deps */

// Utils & config
import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useQuery } from "../../../../hooks/hooks";
import wrx4Logo from "../../../../assets/images/wrx4_logo.svg";
import { eventDispatcher } from "../../../../helpers/playcanvas/eventDispatcher";
import PlaycanvasContext from "../../../../contexts/playCanvas/playcanvasContext";
import { getVehicleById, getVehiclesForConfigurator } from "../../../../helpers/serviceRequests/vehicle";
import qs from "query-string";

// External components
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// Internal components
import BottomPushyDrawer from "./bottomPushyDrawer/bottomPushyDrawer";
import VehicleAccordion from "../../../../components/molecules/vehicleAccordion/vehicleAccordion";
import PartsAccordion from "../webEditor/partsAccordion/partsAccordion";
import { EPlaycanvasEvents } from "../../../../playcanvas";
import ShareModal from "../webEditor/shareModal/shareModal";
import VehiclePartInfoModal from "./vehiclePartInfoModal/vehiclePartInfoModal";
import EditorNavbar from "./editorNavbar/editorNavbar";
import ActionsBar from "./actionsBar/actionsBar";
import { useShoppingCart } from "src/stores/shoppingCart";

import { removeQuantityOrItemFromShoppingCart, addQuantityToCartItem, checkIfItemExists } from "src/helpers/cartActions/cartActions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginBottom: "55vh",
    minHeight: "55vh",
  },

  openContent: {
    position: "relative",
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // marginBottom: "55vh",
    minHeight: "100vh",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginBottom: 0,
  },
}));

const Editor = () => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const [iframeReady, setiframeReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [vehicles, setvehicles] = useState([]);
  const [selectedVehicle, setselectedVehicle] = useState("");
  const [selectedVehiclePart, setselectedVehiclePart] = useState({});
  const [selectedVehicleParts, setselectedVehicleParts] = useState([]);
  const [vehiclePartInfoModalOpened, setvehiclePartInfoModalOpened] = useState(false);
  const [vehiclePartsQueryParams, setvehiclePartsQueryParams] = useState("");
  const [shareModalOpen, setshareModalOpen] = useState(false);
  const [searchingVehicles, setsearchingVehicles] = useState(true);
  const playcanvas = useContext(PlaycanvasContext);
  const queryParams = useQuery();
  const { palette } = useTheme();

  const { shoppingCart, setshoppingCart } = useShoppingCart();

  useEffect(() => {
    const getVehicles = async () => {
      const res = await getVehiclesForConfigurator();

      if (res.status === 200) {
        setvehicles(res.data);
      } else {
        alert("Hubo un error al buscar los vehículos");
      }

      setsearchingVehicles(false);
      setOpen(true);
    };

    if (!queryParams.get("vehicleId")) {
      getVehicles();
    } else {
      setsearchingVehicles(false);
    }
  }, []);

  useEffect(() => {
    const vehicleId = queryParams.get("vehicleId");
    const getVehicle = async () => {
      const res = await getVehicleById(vehicleId);

      if (res.status === 200) {
        setselectedVehicle(res.data);
      }
    };

    if (!!vehicleId) {
      getVehicle();
    }
  }, [queryParams.vehicleId]);

  useEffect(() => {
    if (selectedVehicle) {
      window.addEventListener(
        "message",
        (event) => {
          handleIframeConnectionSuccess(event);
        },
        false
      );

      playcanvas.connectToIframe();
    }

    return () => {
      window.removeEventListener("message", (event) => {
        handleIframeConnectionSuccess(event);
      });
    };
  }, [playcanvas, selectedVehicle]);

  const handleSelectCar = (vehicleId) => {
    setOpen(false);
    history.push({ pathname: "/editor", search: `?vehicleId=${vehicleId}`, state: { vehicles } });
  };

  const handleIframeConnectionSuccess = (event) => {
    if (!event.data || !event.data.type) return;

    if (event.data.type === EPlaycanvasEvents.IFrameReady) {
      setiframeReady(true);
      setOpen(true);
    }
  };

  const addToShoppingCart = (part) => {
    const event = eventDispatcher(EPlaycanvasEvents.AddVehiclePart, part);
    const queryParams = qs.parse(vehiclePartsQueryParams);
    const filteredVehicleParts = selectedVehicleParts.filter((vp) => vp.category !== part.category);

    queryParams[part.category] = part.id;
    playcanvas.parseMessage(event);

    const exist = checkIfItemExists({ itemId: part.id, cartItems: shoppingCart.vehicleParts });

    if (exist) {
      const newVehicleParts = addQuantityToCartItem({ itemId: part.id, cartItems: shoppingCart.vehicleParts });
      setshoppingCart({ ...shoppingCart, vehicleParts: newVehicleParts });
    } else {
      setshoppingCart({ ...shoppingCart, vehicleParts: [...shoppingCart.vehicleParts, { vehiclePart: part, quantity: 1 }] });
    }

    setselectedVehicleParts([...filteredVehicleParts, part]);
    setvehiclePartsQueryParams(qs.stringify(queryParams));
  };

  const removeFromShoppingCart = (part) => {
    const event = eventDispatcher(EPlaycanvasEvents.RemoveVehiclePart, part);
    const newShoppingCart = removeQuantityOrItemFromShoppingCart({ itemId: part.id, cartItems: shoppingCart.vehicleParts });

    playcanvas.parseMessage(event);
    setshoppingCart({ ...shoppingCart, vehicleParts: newShoppingCart });
    setselectedVehicleParts(selectedVehicleParts.filter((vp) => vp.id !== part.id));
  };

  const getAllVehiclePartsInShoppingCartNotSelected = () => {
    return shoppingCart.vehicleParts.filter((vp) => selectedVehicleParts.every((selectedVp) => vp.id !== selectedVp.id));
  };

  const removeAllParts = () => {
    const event = eventDispatcher(EPlaycanvasEvents.RemoveAllVehicleParts);
    const finalShoppingCartVehicleParts = getAllVehiclePartsInShoppingCartNotSelected();

    // TO DO: Fire Play Canvas event
    playcanvas.parseMessage(event);

    setshoppingCart({ ...shoppingCart, vehicleParts: finalShoppingCartVehicleParts });
    setselectedVehicleParts([]);
  };

  const handleGoBack = () => {
    history.goBack();
    history.location.state = { vehicles };
  };

  const handleViewPartInfo = (vehiclePart) => {
    setselectedVehiclePart(vehiclePart);
    setvehiclePartInfoModalOpened(true);
  };

  const handleScreenshot = () => {
    const event = eventDispatcher(EPlaycanvasEvents.TakeScreenshot);

    playcanvas.parseMessage(event);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main
        className={clsx(!open ? classes.openContent : classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {iframeReady && (
          <>
            <ActionsBar handleFullScren={() => setOpen(!open)} fullScreen={!open} />
            <EditorNavbar
              backTitle={selectedVehicle ? selectedVehicle.model : "Customizar vehículo"}
              handleBackTitle={handleGoBack}
              handleShare={() => setshareModalOpen(true)}
              handleRefresh={removeAllParts}
              handleDownload={handleScreenshot}
            />
          </>
        )}

        {!!!selectedVehicle ? (
          <Box
            position="absolute"
            top={0}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="50vh"
            zIndex={1}
            width={"100%"}
            style={{ backgroundColor: palette.background.default, padding: theme.spacing(4), marginBottom: theme.spacing(4) }}
          >
            <img src={wrx4Logo} alt="img-1" />
            <Typography variant="h5" style={{ marginBottom: theme.spacing(2) }}>
              ¿ESTÁS LISTO PARA VIVIR LA EXPERIENCIA WRX4?
            </Typography>
            <Typography variant="body1" style={{ fontSize: "18px" }}>
              Lorem ipsum dolor sit amet, conseur sadipscing elitr, sed diam nonumy eirmod
            </Typography>
          </Box>
        ) : (
          <iframe title="iframe-1" id="game-iframe" src={selectedVehicle.playCanvasUrl} height="100%" width="100%" frameBorder={0}></iframe>
        )}
      </main>

      {/* @ts-ignore */}
      <BottomPushyDrawer
        selectedVehicle={!!selectedVehicle}
        open={open}
        backTitle={selectedVehicle ? selectedVehicle.model : "Seleccionar vehículo"}
        handleBackTitle={handleGoBack}
      >
        {searchingVehicles ? (
          <></>
        ) : !!!selectedVehicle ? (
          Object.entries(vehicles).map((brandAndVehicles, index) => (
            <VehicleAccordion
              key={index}
              expanded={index === 0}
              title={brandAndVehicles[0]}
              vehicles={brandAndVehicles[1]}
              handleSelectCar={handleSelectCar}
            />
          ))
        ) : selectedVehicle.parts ? (
          selectedVehicle.parts.map((groupedParts, index) => (
            <PartsAccordion
              expanded={index === 0}
              key={index}
              title={groupedParts[0]}
              parts={groupedParts[1]}
              addToShoppingCart={addToShoppingCart}
              removeFromShoppingCart={removeFromShoppingCart}
              selectedVehicleParts={selectedVehicleParts}
              handleViewPartInfo={handleViewPartInfo}
            />
          ))
        ) : (
          <></>
        )}
      </BottomPushyDrawer>

      {shareModalOpen && (
        <ShareModal open={shareModalOpen} handleClose={() => setshareModalOpen(false)} vehiclePartsQueryParams={vehiclePartsQueryParams} />
      )}

      {vehiclePartInfoModalOpened && (
        <VehiclePartInfoModal
          open={vehiclePartInfoModalOpened}
          handleClose={() => setvehiclePartInfoModalOpened(false)}
          vehiclePart={selectedVehiclePart}
        />
      )}
    </div>
  );
};

Editor.propTypes = {};

export default Editor;
