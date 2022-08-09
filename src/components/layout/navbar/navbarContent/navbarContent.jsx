// Utils & config
import React, { useContext,useState } from "react";
import PropTypes from "prop-types";
import ShoppingCartContext from "../../../../contexts/shoppingCart/shoppingCartContext";
import { useHistory, Link } from "react-router-dom";

// External components
import MaterialButton from "@material-ui/core/Button";
import LoginPopover from "../../../molecules/loginPopover/loginPopover";
import CloseSessionPopover from "../../../molecules/closeSessionPopover/closeSessionPopover";
import { useTheme, makeStyles, Box, IconButton, Badge, TextField, Typography, Popover } from "@material-ui/core";

// Internal components
import NavbarDropdown from "../navbarDropdown";
import Button from "../../../atoms/button/button";
import { useAuthStore, useUserInfoStore } from "../../../../stores/auth";
import { clearLocalStorage,clearUserInfo } from "../../../../helpers/localStorage/localStorage";

// Icons & Images
import logo from "../../../../assets/images/wrx4_logo.svg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowForward from "@material-ui/icons/ArrowForward";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// store
import { useShoppingCart } from "../../../../stores/shoppingCart";

const NavbarContent = (props) => {
  const [shoppingCart] = useContext(ShoppingCartContext);
  const history = useHistory();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const setIsAuthenticated = useAuthStore((state) => state.setIsAuthenticated);
  const setUserInfo = useUserInfoStore((state) => state.setUserInfo);
  var userName = useState(useUserInfoStore.getState().userInfo.name);
  
  //-----POP OVER 1 (LOGIN CLIENT)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClickOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosePopover = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  //------POP OVER 3 (LOG OUT)
  const [anchorEl2, setAnchorEl2] = React.useState(null); 
  const handleClickLogOutPopover = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleCloseSession = () => {
    setAnchorEl2(null);
    setIsAuthenticated(false);
    clearUserInfo();
    history.push("/");
  };
  const handleCloseLogOutPopover= () =>{
    setAnchorEl2(null);
  }
  const open2 = Boolean(anchorEl2);
  const id2 = open2 ? 'simple-popover' : undefined;

   return (
    <>
    <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
      <Box display="flex" alignItems="center">
        <img src={logo} alt="logo" style={{ maxWidth: 192, cursor: "pointer" }} onClick={() => history.push("/")} />
        <NavbarDropdown title="VEHICULOS" items={vehicleItems} />
        <NavbarDropdown title="ACCESORIOS" items={accesoryItems} />
        <MaterialButton onClick={() => history.push("/acercade")}>ACERCA DE WRX4</MaterialButton>
      </Box>
      <Box display="flex" alignItems="center">
        <IconButton>
          <Badge color="error" badgeContent={shoppingCart.vehicleParts.length + shoppingCart.products.length}>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <IconButton variant="text" onClick={ !isAuthenticated ? handleClickOpenPopover : ()=>history.push("/myaccount")} >
          <AccountCircleIcon style={{marginRight:'4px'}} />
          { isAuthenticated ?
          userName : null
          }
        </IconButton>
        <div>
        { isAuthenticated ? 
        <IconButton onClick={handleClickLogOutPopover} >
          <ExpandMoreIcon></ExpandMoreIcon>
        </IconButton>
        : null
        }
        </div>
        <Link to="/editor" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary" endIcon={<ArrowForward />}>
            CUSTOMIZE SU VEHÍCULO
          </Button>
        </Link>
      </Box>
    </Box>

      <LoginPopover open={open} id={id} anchorEl={anchorEl} close={handleClosePopover}></LoginPopover>
      <CloseSessionPopover open={open2} id={id2} anchorEl={anchorEl2} handleClosePopover={handleCloseLogOutPopover} 
      handleClose={handleCloseSession} top={60} left={857}></CloseSessionPopover>
    </>
  );
};

NavbarContent.propTypes = {};

export default NavbarContent;


const vehicleItems = [
  { label: "Suzuki Jimny JB74", url: "/editor?vehicleId=1" },
  { label: "Hyundai H1", url: "/editor?vehicleId=1" },
];

const accesoryItems = [
  { label: "Estriberas", url: "/accesorios?categoria=estriberas" },
  { label: "Rocksliders", url: "/accesorios?categoria=rocksliders" },
  { label: "Protecciones", url: "/accesorios?categoria=protecciones" },
  { label: "Escaleras", url: "/accesorios?categoria=escaleras" },
  { label: "Bandejas", url: "/accesorios?categoria=bandejas" },
  { label: "Mesas", url: "/accesorios?categoria=mesas" },
];
