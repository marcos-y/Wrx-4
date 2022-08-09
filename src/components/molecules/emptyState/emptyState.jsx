// Utils & config
import React from "react";
import PropTypes from "prop-types";
import styles from "./emptyState.module.css";

const EmptyState = (props) => {
  // 276 x 216

  return (
    <div className={styles.emptyStateContainer}>
      <img className={styles.emptyStateImg} src="../../../assets/images/acceso_denegado.svg" alt="Empty State" />
      {props.title && <h4>{props.title}</h4>}
      {props.subtitle && <h5>{props.subtitle}</h5>}
      {props.label && <p className={styles.leyendaUno}>{props.label}</p>}
      {props.sublabel && <p className={styles.leyendaDos}>{props.sublabel}</p>}
      {props.children}
    </div>
  );
};

EmptyState.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  label: PropTypes.string,
  sublabel: PropTypes.string,
};

export default EmptyState;
