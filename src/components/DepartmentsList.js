import React from 'react';

import {useStore} from '../store/Store';
import {deleteDepartment} from '../store/AppReducer';

import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import {
  IconButton,
  TableBody,
  TableCell, TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const DepartmentsList = () => {
  const [{departments}, dispatch] = useStore();
  const classes = useStyles();
  const handleDelete = (id)=>{
    dispatch(deleteDepartment(id));
  }
  return (
      <div className={classes.root}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell width={100}>#</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Manager Email</TableCell>
                <TableCell align="center" width={50}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {departments.map((row, i) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {i+1}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.managerEmail}</TableCell>
                    <TableCell align="center">
                      <IconButton aria-label="delete" className={classes.margin} color={'secondary'} onClick={()=>{handleDelete(row.id)}}>
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
};

export default DepartmentsList;