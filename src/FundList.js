import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, LF, MXF, MNF, TF) {
  return { name, LF, MXF, MNF, TF };
}

const rows = [
  createData('Allen', 100, 500, 50, 2000),
  createData('Bird', 200, 800, 100, 3000),
  createData('Charles', 300, 1000, 200, 4000),
  createData('Dirk', 400, 1200, 300, 5000),
  createData('Fordham', 500, 1400, 400, 6000),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Fund info (US dollar)</TableCell>
            <TableCell align="right">latest fund</TableCell>
            <TableCell align="right">max fund</TableCell>
            <TableCell align="right">min fund</TableCell>
            <TableCell align="right">total fund</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.LF}</TableCell>
              <TableCell align="right">{row.MXF}</TableCell>
              <TableCell align="right">{row.MNF}</TableCell>
              <TableCell align="right">{row.TF}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
