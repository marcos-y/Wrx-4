// Utils & config
import React from "react";
import PropTypes from "prop-types";
import colors from "../../../../../styles/colors.scss";
import styles from "./accesoriesCarousel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// External components
import Slider from "react-slick";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";

// Internal components
import AccesoryCard from "../accesoryCard/accesoryCard";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        background: colors.backgroundFirstColorDt,
        height: 48,
        width: 48,
        zIndex: 999,
      }}
      onClick={onClick}
    />
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        background: colors.backgroundFirstColorDt,
        height: 48,
        width: 48,
      }}
      onClick={onClick}
    />
  );
};

const AccesoriesCarousel = (props) => {
  var settings = {
    center: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Hidden smDown>
      <Slider {...settings} className={styles.carouselContainer}>
        {props.accesories.map((accesory, index) => (
          <Box paddingX={1}>
            <AccesoryCard key={index} accesory={accesory} />
          </Box>
        ))}
      </Slider>
    </Hidden>
  );
};

AccesoriesCarousel.propTypes = {
  accesories: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default AccesoriesCarousel;
