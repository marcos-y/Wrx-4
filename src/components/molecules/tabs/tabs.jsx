// Utils & config
import React from "react";
import PropTypes from "prop-types";

// External components
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// Internal components

// const styles = (theme) => ({
//   fullWidth: {
//     flex: 1
//   },
// });

const CustomTabs = (props) => {
  return (
    <Tabs
      value={props.value}
      indicatorColor="secondary"
      textColor="secondary"
      style={{ marginBottom: 16 }}
      variant={props.variant || "standard"}
      centered
    >
      {props.options.map((option, index) => (
        <Tab
          key={index}
          label={option}
          style={{ fontFamily: "Open sans", fontSize: 18 }}
          onClick={() => props.handleTabSelect(option)}
          fullWidth
        />
      ))}
    </Tabs>
  );
};

CustomTabs.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CustomTabs;
