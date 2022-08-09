// Utils & Config
import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import sidebarOptions from "../../../assets/sidebarOptions";

// External components
import Hidden from "@material-ui/core/Hidden";

// Internal components
import Navbar from "../navbar/navbar";
import MobileDrawer from "../drawers/mobileDrawer";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   toolbar: {
//     paddingRight: 24, // keep right padding when drawer closed
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   toolbarIcon: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     padding: "0 8px",
//     ...theme.mixins.toolbar,
//   },
//   appBar: {
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     backgroundColor: theme.palette.background.secondary,
//     width: "100vw",
//     boxShadow: "none",
//   },
//   menuButton: {
//     marginRight: 36,
//   },
//   menuButtonHidden: {
//     display: "none",
//   },
//   title: {
//     flexGrow: 1,
//   },
//   content: {
//     flexGrow: 1,
//     height: "100vh",
//     overflow: "auto",
//   },
//   container: {
//     paddingTop: theme.spacing(4),
//     paddingBottom: theme.spacing(4),
//   },
//   paper: {
//     padding: theme.spacing(2),
//     display: "flex",
//     overflow: "auto",
//     flexDirection: "column",
//   },
//   fixedHeight: {
//     height: 240,
//   },
//   appBarSpacer: theme.mixins.toolbar,
// }));

export default function LayoutFixedSidebar(props) {
  // const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpenDrawer = () => {
    setOpen(true);
  };

  return (
    <>
      <CssBaseline />
      <Navbar handleOpenDrawer={handleOpenDrawer} sidebarOpened={open} setSidebarOpen={setOpen} />
      <Hidden mdUp>
        <MobileDrawer open={open} onClose={() => setOpen(false)} sidebarOptions={sidebarOptions} />
      </Hidden>

      {props.children}
    </>
  );
}
