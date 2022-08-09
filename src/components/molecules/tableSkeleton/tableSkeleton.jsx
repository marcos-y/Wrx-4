// Utils & Config
import React from "react";

// External components
import Skeleton from "@material-ui/lab/Skeleton";
import { useTheme } from "@material-ui/core";

// Internal components

const TableSkeleton = (props) => {
  const { palette } = useTheme();
  return <Skeleton variant="rect" width="100%" height="300px" animation="wave" style={{ backgroundColor: palette.secondColor }} />;
};

TableSkeleton.propTypes = {};

export default TableSkeleton;
