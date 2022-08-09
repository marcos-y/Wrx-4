// Utils & config
import React from "react";
import fonts from "../../../styles/fonts.module.scss";

// Images
import navbarBackground from "../../../assets/images/navbarBackgroundImg.png";

//Internal components
import Navbar from "../../layout/navbar/navbar";

const NavbarBackground = (props) => {
  return (
    <>
      <div
        style={{
          height: "300px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%),url(${navbarBackground})`,
          backgroundRepeat: "no-repeat",
          //   backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Navbar></Navbar>
        <h2
          style={{
            color: "white",
            top: "50% !important",
            position: "absolute",
            fontFamily: fonts.titleFont,
          }}
        >
          {props.title}
        </h2>
      </div>
    </>
  );
};

export default NavbarBackground;
