// Utils & Config
import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";

// External components
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.secondColor,
    color: theme.palette.fourthColor,
    borderBottom: "none",
  },
  body: {
    fontSize: 14,
    color: theme.palette.fourthColor,
    borderBottom: "none",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondColor,
    borderBottom: "none",
  },
}))(TableRow);

const useStyles = makeStyles({});

export default function RangeHourTable(props) {
  const { palette } = useTheme();
  const classes = useStyles();

  return (
    <TableContainer component="div">
      <Table className={classes.table} aria-label="customized table" padding="none">
        <TableHead>
          <TableRow>
            <StyledTableCell>Rango horario</StyledTableCell>
            <StyledTableCell align="right">Cap. Bolsas</StyledTableCell>
            <StyledTableCell align="right">Cap. Recogidas</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.hourRanges.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.rangeTitle}
              </StyledTableCell>
              <StyledTableCell align="right">{row.maxBagQuantity}</StyledTableCell>
              <StyledTableCell align="right">{row.maxDeliveryQuantity}</StyledTableCell>
              <StyledTableCell align="right" style={{ display: "flex", alignItems: "center" }}>
                <IconButton onClick={() => props.handleEditHourRange(row)}>
                  <Edit style={{ color: palette.fourthColor }} />
                </IconButton>
                <IconButton>
                  <Delete style={{ color: palette.fourthColor }} />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

RangeHourTable.propTypes = {
  handleEditHourRange: PropTypes.func.isRequired,
};
