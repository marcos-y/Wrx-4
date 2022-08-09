// Utils & config
import React from "react";

// External components
import Grid from "@material-ui/core/Grid";

// Icons & images
import editorImage from "../../../../../assets/images/editor.png";

const EditorImage = (props) => {
  return (
    <Grid item xs={12} md={7} style={{ display: "flex" }} alignItems="center">
      <img src={editorImage} alt="editor" width="100%" />
    </Grid>
  );
};

EditorImage.propTypes = {};

export default EditorImage;
