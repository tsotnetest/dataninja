import React, {useState} from 'react';

import {useStore} from '../store/Store';
import {deleteDepartment} from '../store/AppReducer';

import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import {
  Button,
  IconButton,
  TableBody,
  TableCell, TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DepartmentFormModal from './DepartmentFormModal';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'center',
  },
}));

const DepartmentsList = () => {
  const [{departments}, dispatch] = useStore();

  const [addModalVisible, setAddModalVisible] = useState(false);
  const [editData, setEditData] = useState(null);

  const classes = useStyles();
  const handleDelete = (id) => {
    dispatch(deleteDepartment(id));
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
            {'Add department'}
          </Button>
        </div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell width={100}>#</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Manager Email</TableCell>
                <TableCell align="center" width={90}/>
              </TableRow>
            </TableHead>
            <TableBody>
              {departments.map((row, i) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {i + 1}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.managerEmail}</TableCell>
                    <TableCell align="center">
                      <IconButton color={'primary'} onClick={() => {
                        setEditData(row);
                        setAddModalVisible(true);
                      }}>
                        <EditIcon fontSize="small"/>
                      </IconButton>
                      <IconButton aria-label="delete" className={classes.margin}
                                  color={'secondary'} onClick={() => {
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
              <DepartmentFormModal
                  visible={true}
                  onClose={() => {
                    setAddModalVisible(false);
                    setEditData(null);
                  }}
                  initialData={editData}
              />
          )
        }

      </div>
  );
};

export default DepartmentsList;