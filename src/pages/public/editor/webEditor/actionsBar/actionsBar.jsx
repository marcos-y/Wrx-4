// Utils & config
import React from "react";
import PropTypes from "prop-types";
// External components
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";

// Internal components

// Images & Icons
import ShareIcon from "@material-ui/icons/Share";
import DownloadIcon from "@material-ui/icons/GetApp";
import HelpIcon from "@material-ui/icons/Help";
import RefreshIcon from "@material-ui/icons/Refresh";
import FullScreenIcon from "@material-ui/icons/Fullscreen";

const ActionsBar = (props) => {
  return (
    <Box
      id="actionBarContainer"
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
      position="absolute"
      right="0"
      height={360}
      top="calc(50% - 180px)"
      style={{ marginRight: "16px" }}
    >
      <IconButton onClick={props.handleShare}>
        <ShareIcon style={{ fontSize: "32px" }} />
      </IconButton>
      <IconButton onClick={props.handleDownload}>
        <DownloadIcon style={{ fontSize: "32px" }} />
      </IconButton>
      <IconButton onClick={props.handleHelp}>
        <HelpIcon style={{ fontSize: "32px" }} />
      </IconButton>
      <IconButton onClick={props.handleRefresh}>
        <RefreshIcon style={{ fontSize: "32px" }} />
      </IconButton>
      <IconButton onClick={props.handleFullScren}>
        <FullScreenIcon style={{ fontSize: "32px" }} />
      </IconButton>
    </Box>
  );
};

ActionsBar.propTypes = {
  handleShare: PropTypes.func.isRequired,
  handleDownload: PropTypes.func.isRequired,
  handleHelp: PropTypes.func.isRequired,
  handleRefresh: PropTypes.func.isRequired,
  handleFullScren: PropTypes.func.isRequired,
};

export default ActionsBar;
