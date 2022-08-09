// Utils & Config
import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@material-ui/core/styles";

// External components
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";

// Internal components

const CustomPagination = (props) => {
  const { palette } = useTheme();
  return (
    <Pagination
      count={props.count}
      page={props.page}
      onChange={props.onChange}
      style={{ display: "flex", justifyContent: "center", color: "white" }}
      renderItem={(item) => <PaginationItem {...item} style={{ color: palette.fourthColor }} />}
    />
  );
};

CustomPagination.propTypes = {
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomPagination;
