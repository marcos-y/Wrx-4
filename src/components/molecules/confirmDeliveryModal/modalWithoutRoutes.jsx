// Utils & Config
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core";

// External components
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

// Internal components
import CustomTextMontserrat from "../../atoms/customText/CustomTextMontserrat";

const ModalWithoutRoutes = (props) => {
  const { palette } = useTheme();
  return (
    <>
      <Grid item xs={12}>
        <CustomTextMontserrat text={`No hay ninguna hoja de ruta creada para el ${props.deliveryDate}.`} />
      </Grid>
      <Grid item xs={12}>
        <CustomTextMontserrat text="Crear hoja de ruta" style={{ marginBottom: 16 }} />
        <Autocomplete
          value={props.selectedDriver}
          onChange={(event, newValue) => props.handleSelectDriver(newValue)}
          id="combo-box-demo"
          options={props.drivers}
          getOptionLabel={(option) => option.name}
          style={{ backgroundColor: palette.thirdColor, color: palette.fourthColor }}
          ListboxProps={{ style: { backgroundColor: palette.thirdColor, color: palette.fourthColor } }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Driver"
              variant="outlined"
              InputLabelProps={{ style: { color: palette.fourthColor } }}
              // InputProps={{ style: { color: palette.fourthColor } }}
            />
          )}
        />
      </Grid>
    </>
  );
};

ModalWithoutRoutes.propTypes = {
  deliveryDate: PropTypes.string.isRequired,
  selectedDriver: PropTypes.string.isRequired,
  handleSelectDriver: PropTypes.func.isRequired,
  drivers: PropTypes.arrayOf(PropTypes.object).isRequired,
  confirmHandler: PropTypes.func.isRequired,
};

export default ModalWithoutRoutes;
