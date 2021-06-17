import React, {useState} from 'react';

import {useStore} from '../store/Store';
import {login} from '../store/AppReducer';
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

const AuthModal = () => {
  const [{authToken}, dispatch] = useStore();
  const classes = useStyles();

  const [formData, setFormData] = useState({username: '', password: ''});

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(formData))
  };

  return (
      <Modal className={classes.root} open={!authToken}>
        <form className={classes.form} noValidate autoComplete="off"
              onSubmit={handleSubmit}>
          <TextField
              label="User"
              variant="outlined"
              onChange={(event) => {
                setFormData({...formData, username: event.target.value});
              }}
              value={formData.username}
          />
          <TextField
              label="Password"
              variant="outlined"
              type={'password'}
              onChange={(event) => {
                setFormData({...formData, password: event.target.value});
              }}
              value={formData.password}
          />
          <Button variant="contained" color="primary" type="submit" style={{marginTop: 20}}>
            Sign in
          </Button>
        </form>
      </Modal>
  );
};

export default AuthModal;