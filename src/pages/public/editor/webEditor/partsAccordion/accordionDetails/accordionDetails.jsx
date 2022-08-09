// Utils & config
import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import fonts from "../../../../../../styles/fonts.module.scss";

// External components
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// Internal components
import Button from "../../../../../../components/atoms/button/button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  detailsRoot: {
    backgroundColor: theme.palette.background.quaternary,
    "&:last-child": {
      marginBottom: 4,
    },
  },
}));

const VehiclePartAccordionDetails = (props) => {
  const classes = useStyles();
  const { palette } = useTheme();

  const isSelected = (part) => {
    return props.selectedVehicleParts.some((vehiclePart) => vehiclePart.id === part.id);
  };

  return (
    <AccordionDetails classes={{ root: classes.detailsRoot }} style={{ marginTop: 12 }}>
      <Container disableGutters>
        <Grid container spacing={4}>
          <Grid item xs={3} style={{ backgroundColor: palette.background.secondary }}></Grid>
          <Grid item xs={9} style={{ backgroundColor: palette.background.tertiary }}>
            <Typography
              variant="h6"
              align="left"
              style={{ marginBottom: 16, fontSize: 16, fontWeight: "bold", fontFamily: fonts.paragraphFont }}
            >
              {props.part.name || "Paragolpes"}
            </Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Button
                style={{ marginRight: "4px", width: "50%", backgroundColor: palette.background.quaternary }}
                startIcon={<InfoIcon />}
                onClick={props.handleViewPartInfo}
              >
                VER INFO
              </Button>

              <Button
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                style={{
                  marginLeft: "4px",
                  width: "50%",
                  backgroundColor: isSelected(props.part) ? "#FF9300" : palette.secondary.main,
                  color: palette.text.primary,
                }}
                onClick={() => (isSelected(props.part) ? props.removeFromShoppingCart() : props.addToShoppingCart())}
              >
                {isSelected(props.part) ? "REMOVER" : "AGREGAR"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </AccordionDetails>
  );
};

VehiclePartAccordionDetails.propTypes = {
  part: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }),
  addToShoppingCart: PropTypes.func.isRequired,
  removeFromShoppingCart: PropTypes.func.isRequired,
  selectedVehicleParts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ),
  handleViewPartInfo: PropTypes.func.isRequired,
};

export default VehiclePartAccordionDetails;
