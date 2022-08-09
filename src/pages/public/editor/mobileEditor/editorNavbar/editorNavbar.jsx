// Utils & config
import React from "react";
import PropTypes from "prop-types";

// External components
import Box from "@material-ui/core/Box";
import ArrowBack from "@material-ui/icons/ArrowBack";

// Internal components
import Button from "../../../../../components/atoms/button/button";
import ActionsMenu from "../actionsMenu/actionsMenu";

const EditorNavbar = (props) => {
  return (
    <Box position="absolute" top="0" display="flex" justifyContent="space-between" backgroundColor="transparent" width="100%">
      <Button onClick={props.handleBackTitle} variant="outlined" color="default" style={{ borderWidth: 0 }} startIcon={<ArrowBack />}>
        {props.backTitle}
      </Button>

      <ActionsMenu handleDownload={props.handleDownload} handleRefresh={props.handleRefresh} handleShare={props.handleShare} />
    </Box>
  );
};

EditorNavbar.propTypes = {
  backTitle: PropTypes.string.isRequired,
  handleBackTitle: PropTypes.func.isRequired,
  handleShare: PropTypes.func.isRequired,
  handleRefresh: PropTypes.func.isRequired,
  handleDownload: PropTypes.func.isRequired,
};

export default EditorNavbar;
