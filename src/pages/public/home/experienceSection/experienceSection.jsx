// Utils & components
import React from "react";
import { useTheme } from "@material-ui/core";

// External components
import Box from "@material-ui/core/Box";

// Internal components
import SectionContainer from "../../../../components/layout/sectionContainer/sectionContainer";
import TextContent from "./textContent/textContent";
import EditorImage from "./editorImage/editorImage";

const ExperienceSection = (props) => {
  const theme = useTheme();

  return (
    <Box style={{ backgroundColor: theme.palette.background.secondary }}>
      <SectionContainer maxWidth="lg" containerStyle={{ paddingTop: theme.spacing(10), paddingBottom: theme.spacing(10) }}>
        <TextContent />
        <EditorImage />
      </SectionContainer>
    </Box>
  );
};

ExperienceSection.propTypes = {};

export default ExperienceSection;
