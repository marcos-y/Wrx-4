// Utils & config
import React, { useContext, useState } from "react";
import { useTheme } from "@material-ui/core";

//External components
import Popover from '@material-ui/core/Popover';

//Internal components
import Button from "../../atoms/button/button";

const CloseSessionPopover = (props) =>{

    const theme = useTheme();

    return(
    <Popover
      PaperProps={{style:{display:'flex',flexDirection:'column',width:theme.spacing(24),
      justifyContent:'flexStart',padding:theme.spacing(2)}}}
      id={props.id}
      open={props.open}
      onClose={props.handleClosePopover}
      anchorReference="anchorPosition"
      anchorPosition={{  top: props.top, left:props.left  }}
      disableScrollLock
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      >
        <Button onClick={props.handleClose}>CERRAR SESIÓN</Button>
    </Popover>
    )
}

export default CloseSessionPopover;