import React, {useState} from 'react';

import {useStore} from '../store/Store';
import {addDepartment, updateDepartment} from '../store/AppReducer';
import {Button, Modal, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexDirection: 'column',
  },
}));

const DepartmentFormModal = (props) => {

  const {visible, onClose, initialData} = props;

  const [, dispatch] = useStore();
  const classes = useStyles();

  const [formData, setFormData] = useState(initialData || {name: '', managerEmail: ''});

  const handleSubmit = (event) => {
    event.preventDefault();
    if(formData.id){
      dispatch(updateDepartment(formData));
    } else {
      dispatch(addDepartment(formData));
    }

    onClose()
  };

  return (
      <Modal className={classes.root} open={visible} onClose={onClose}>
        <form className={classes.form} noValidate autoComplete="off"
              onSubmit={handleSubmit}>
          <TextField
              label="Name"
              variant="outlined"
              onChange={(event) => {
                setFormData({...formData, name: event.target.value});
              }}
              value={formData.name}
          />
          <TextField
              label="Manager Email"
              variant="outlined"
              onChange={(event) => {
                setFormData({...formData, managerEmail: event.target.value});
              }}
              value={formData.managerEmail}
          />
          <Button variant="contained" color="primary" type="submit" style={{marginTop: 20}}>
            Add
          </Button>
        </form>
      </Modal>
  );
};

export default DepartmentFormModal;