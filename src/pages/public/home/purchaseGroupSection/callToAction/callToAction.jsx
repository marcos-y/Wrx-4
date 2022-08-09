// Utils & config
import React, { useState } from "react";
import PropTypes from "prop-types";

// External components
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

// Internal components
import PhoneNumberInput from "./phoneNumberInput";
import Button from "../../../../../components/atoms/button/button";

// Icons & images
import ArrowForward from "@material-ui/icons/ArrowForward";

const CallToAction = (props) => {
  const [phoneNumber, setphoneNumber] = useState("");

  return (
    <Grid item xs={12}>
      <Box display="flex" justifyContent="center">
        {/* <Button variant="contained" color="secondary">
          (+34) 688 321 321
        </Button> */}
        <PhoneNumberInput value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} placeholder="(+34) 688 321 321" />
        <Button variant="contained" color="primary" endIcon={<ArrowForward />}>
          UNIRME
        </Button>
      </Box>
    </Grid>
  );
};

CallToAction.propTypes = {};

export default CallToAction;
