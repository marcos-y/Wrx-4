// Utils & config
import React from "react";
import PropTypes from "prop-types";
import styles from "../../home/accesoriesSection/accesoriesCarousel/accesoriesCarousel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// External components
import Slider from "react-slick";
import Hidden from "@material-ui/core/Hidden";

// Internal components
import CustomizeAccesoryItem from "./customizeAccesoryItem";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "spaceAround",
        alignItems: "center",
        borderRadius: 50,
        background: "none",
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
        justifyContent: "spaceAround",
        alignItems: "center",
        borderRadius: 50,
        background: "none",
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
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <>
      <Hidden smDown>
        <Slider {...settings} className={styles.carouselContainer} style={{ padding: "0px" }}>
          {props.items.map((item, index) => (
            <CustomizeAccesoryItem key={index} item={item} />
          ))}
        </Slider>
      </Hidden>
    </>
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
