// Utils && config
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core";

// External components
import Grid from "@material-ui/core/Grid";

// Internal components
import InformationItem from "./informationItem";

const GeneralInformation = (props) => {
  const { palette } = useTheme();

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        style={{ backgroundColor: palette.background.tertiary, borderBottom: "2px solid", borderColor: palette.background.primary }}
      >
        <InformationItem title="VEHÍCULO" value={props.vehicleName} />
        <InformationItem title="DIMENSIONES" value={props.dimensions} />
        <InformationItem title="PESO" value={props.weight} />
        <InformationItem title="TIEMPO DE MONTAJE" value={props.mountingTime} />
        <InformationItem title="ACABADO" value={props.acabado} />
        <InformationItem title="TORNILLERÍA" value={props.tornilleria} />
        <InformationItem title="CABESTRANTE" value={props.cabestrante} />
        <InformationItem title="ILUMINACIÓN" value={props.ilumination} />
      </Grid>
    </Grid>
  );
};

GeneralInformation.propTypes = {
  vehicleName: PropTypes.string.isRequired,
  dimensions: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  acabado: PropTypes.string.isRequired,
  mountingTime: PropTypes.string.isRequired,
  tornilleria: PropTypes.string.isRequired,
  cabestrante: PropTypes.string.isRequired,
  ilumination: PropTypes.string.isRequired,
};

export default GeneralInformation;
