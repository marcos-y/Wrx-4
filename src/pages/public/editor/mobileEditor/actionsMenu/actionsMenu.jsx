// Utils & config
import React from "react";
import PropTypes from "prop-types";

// External components
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MoreVerticalIcon from "@material-ui/icons/MoreVert";

// Internal components

export default function ActionsMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVerticalIcon />
      </IconButton>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={props.handleShare}>Compartir</MenuItem>
        <MenuItem onClick={props.handleDownload}>Descargar</MenuItem>
        <MenuItem onClick={handleClose}>Preguntas frecuentes</MenuItem>
        <MenuItem onClick={props.handleRefresh}>Resetear</MenuItem>
      </Menu>
    </div>
  );
}

ActionsMenu.propTypes = {
  handleShare: PropTypes.func.isRequired,
  handleRefresh: PropTypes.func.isRequired,
  handleDownload: PropTypes.func.isRequired,
};
