// Utils & Config
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

// External components
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    backgroundColor: theme.palette.secondColor,
    color: theme.palette.fourthColor,
  },
  rowTitle: {
    fontSize: 16,
    padding: 8,
    fontWeight: "bold",
    color: theme.palette.fourthColor,
    borderColor: theme.palette.thirdColor,
  },
  rowValue: {
    color: theme.palette.fourthColor,
    padding: 8,
    borderColor: theme.palette.thirdColor,
  },
  paperRoot: {
    backgroundColor: "transparent",
  },
}));

const DeliveriesTable = (props) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} classes={{ root: classes.paperRoot }}>
      <Table className={classes.table} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.rowTitle}>Fecha de solicitud</TableCell>
            <TableCell className={classes.rowTitle}>Usuario</TableCell>
            <TableCell className={classes.rowTitle}>Dirección</TableCell>
            <TableCell className={classes.rowTitle}>Fecha de retiro</TableCell>
            <TableCell className={classes.rowTitle}>Cant. Bolsas</TableCell>
            <TableCell className={classes.rowTitle}>Estado</TableCell>
            <TableCell className={classes.rowTitle}>Acciones </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell className={classes.rowValue}>{row.createdAt}</TableCell>
              <TableCell className={classes.rowValue}>{row.recyclerName}</TableCell>
              <TableCell className={classes.rowValue}>{row.address.name}</TableCell>
              <TableCell className={classes.rowValue}>{row.date}</TableCell>
              <TableCell className={classes.rowValue}>{row.qrcodesQty}</TableCell>
              <TableCell className={classes.rowValue}>
                <Chip label={row.humanState} style={{ color: "white", marginRight: 8, backgroundColor: row.stateColor }} />
              </TableCell>
              <TableCell className={classes.rowValue}>
                <IconButton onClick={() => props.handleOpenDrawer(row)}>
                  <Icon style={{ cursor: "pointer", color: "white" }}>visibility</Icon>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

DeliveriesTable.propTypes = {
  rows: PropTypes.arrayOf(Object),
  handleOpenDrawer: PropTypes.func.isRequired,
};

export default DeliveriesTable;
