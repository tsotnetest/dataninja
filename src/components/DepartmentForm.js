import React, {useState} from 'react';

import {useStore} from '../store/Store';
import {addDepartment} from '../store/AppReducer';
import {Button, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    maxWidth: 400,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    flexDirection: 'column',
  },
}));

const DepartmentForm = () => {
  const [, dispatch] = useStore();
  const classes = useStyles();

  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addDepartment(formData));
  };

  return (
      <div className={classes.root}>
        <form className={classes.form} noValidate autoComplete="off"
              onSubmit={handleSubmit}>
          <TextField
              label="Name"
              variant="outlined"
              onChange={(event) => {
                setFormData({...formData, name: event.target.value});
              }}
          />
          <TextField
              label="Manager Email"
              variant="outlined"
              onChange={(event) => {
                setFormData({...formData, managerEmail: event.target.value});
              }}
          />
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
        </form>
      </div>
  );
};

export default DepartmentForm;