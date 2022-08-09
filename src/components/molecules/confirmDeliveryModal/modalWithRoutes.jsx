// Utils & Config
import React from "react";
import PropTypes from "prop-types";
import { useTheme, makeStyles } from "@material-ui/core";

// External components
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Typography from "@material-ui/core/Typography";

// Internal components
import CustomTextMontserrat from "../../atoms/customText/CustomTextMontserrat";

// MuiTypography-root MuiFormControlLabel-label MuiTypography-body1

const useStyles = makeStyles({
  body1: {
    width: "100%",
  },
});

const ModalWithRoutes = (props) => {
  const { palette } = useTheme();
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <CustomTextMontserrat text={`No hay ninguna hoja de ruta creada para el ${props.deliveryDate}.`} />
      </Grid>
      <Grid item xs={12} style={{ maxHeight: 200, overflow: "scroll" }}>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="routes"
            name="routes"
            value={props.selectedRouteId}
            onChange={(e) => props.handleSelectRoute(e.target.value)}
          >
            {props.routes.map((route) => (
              <FormControlLabel
                value={route.id}
                checked={route.id.toString() === props.selectedRouteId.toString()}
                control={<Radio />}
                label={`${route.driver} - Hoja #${route.id}`}
                style={{ color: palette.fourthColor }}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        {props.creatingNewRoute ? (
          <>
            <CustomTextMontserrat text="Crear hoja de ruta" style={{ marginBottom: 16 }} />
            <FormControl component="fieldset" style={{ width: "100%" }} fullWidth>
              <RadioGroup
                aria-label="routes"
                name="routes"
                value={props.createNewRouteOptionSelected}
                onChange={(e) => props.handleNewRouteOption()}
              >
                <FormControlLabel
                  value={true}
                  control={<Radio />}
                  classes={{ label: classes.body1 }}
                  label={
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
                          label="Nueva ruta"
                          variant="outlined"
                          InputLabelProps={{ style: { color: palette.fourthColor } }}
                          // InputProps={{ style: { color: palette.fourthColor } }}
                        />
                      )}
                    />
                  }
                  style={{ color: palette.fourthColor, width: "100%" }}
                />
              </RadioGroup>
            </FormControl>
          </>
        ) : (
          <Typography style={{ color: palette.fourthColor }} onClick={props.handleClickOnCreateRoute}>
            + Crear nueva hoja de ruta
          </Typography>
        )}
      </Grid>
    </>
  );
};

ModalWithRoutes.propTypes = {
  deliveryDate: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedItem: PropTypes.string.isRequired,
  handleNewRouteOption: PropTypes.func.isRequired,
  creatingNewRoute: PropTypes.bool.isRequired,
  drivers: PropTypes.arrayOf(PropTypes.object),
  selectedDriver: PropTypes.string.isRequired,
  handleSelectDriver: PropTypes.func.isRequired,
  handleClickOnCreateRoute: PropTypes.func.isRequired,
  handleSelectRoute: PropTypes.func.isRequired,
  createNewRouteOptionSelected: PropTypes.bool.isRequired,
};

export default ModalWithRoutes;
