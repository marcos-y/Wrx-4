// Utils & config
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import styles from "./instructionItem.module.scss";

// External components
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// Internal components
import IconText from "../../../../../../components/atoms/iconText/iconText";

const InstructionItem = (props) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box className={styles.flexResponsiveContainer}>
      <IconText iconName={props.instruction.iconName} text={props.instruction.title} responsive={true} />
      <Typography align={isMdUp ? "left" : "center"} color="textPrimary">
        {props.instruction.text}
      </Typography>
    </Box>
  );
};

InstructionItem.propTypes = {
  instruction: PropTypes.shape({ iconName: PropTypes.string.isRequired, title: PropTypes.string.isRequired, text: PropTypes.string.isRequired }),
};

export default InstructionItem;
