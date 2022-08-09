// Utils & config
import React from "react";

// External components

// Internal components
import Box from "@material-ui/core/Box";
import IconText from "../../../../../components/atoms/iconText/iconText";

const InfoList = (props) => {
  return (
    <Box display="flex" justifyContent="space-around" alignItems="center">
      <IconText text="FABRICADOS EN ESPAÑA" iconName="flag" />
      <IconText text="MATERIAL ALUMINIO" iconName="format_shapes" />
      <IconText text="ACCESORIOS HOMOLOGADOS" iconName="card_membership" />
    </Box>
  );
};

InfoList.propTypes = {};

export default InfoList;
