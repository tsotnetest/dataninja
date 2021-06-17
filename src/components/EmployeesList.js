import React, {useState} from 'react';
import {useStore} from '../store/Store';
import {deleteEmployee} from '../store/AppReducer';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import {
  Button,
  IconButton,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import EmployeeFormModal from './EmployeeFormModal';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
  },
}));

const EmployeesList = () => {
  const [{employees}, dispatch] = useStore();
  const classes = useStyles();

  const [addModalVisible, setAddModalVisible] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  return (
      <div className={classes.root}>
        <div style={{padding: 10}}>
          <Button
              variant={'outlined'}
              startIcon={<AddIcon/>}
              onClick={() => {
                setAddModalVisible(true);
              }}
          >
            {'Add employee'}
          </Button>
        </div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell width={100}>#</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Salary</TableCell>
                <TableCell align="right">Department</TableCell>
                <TableCell align="center" width={90}/>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((row, i) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {i + 1}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.salary}</TableCell>
                    <TableCell align="right">{row.department &&
                    row.department.name}</TableCell>
                    <TableCell align="center">
                      <IconButton color={'primary'} onClick={() => {
                        setEditData(row);
                        setAddModalVisible(true);
                      }}>
                        <EditIcon fontSize="small"/>
                      </IconButton>
                      <IconButton color={'secondary'} onClick={() => {
                        handleDelete(row.id);
                      }}>
                        <DeleteIcon fontSize="small"/>
                      </IconButton>
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {
          addModalVisible && (
              <EmployeeFormModal visible={true} onClose={() => {
                setAddModalVisible(false);
                setEditData(null);
              }} initialData={editData}/>
          )
        }
      </div>
  );
};

export default EmployeesList;