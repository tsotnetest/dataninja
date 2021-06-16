import React, {useState} from 'react';

import {useStore} from '../store/Store';
import {addEmployee} from '../store/AppReducer';
import {
  Button,
  FormControl,
  InputAdornment, InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const EmployeeForm = () => {
  const [store, dispatch] = useStore();
  const classes = useStyles();

  const [formData, setFormData] = useState(
      {name: '', email: '', salary: '', department: ''});

  const handleChange = (prop) => (event) => {
    setFormData({...formData, [prop]: event.target.value});
  };
  const handleDepartmentChange = (event) => {
    const depId = event.target.value;
    const department = store.departments.find((d) => d.id === depId);
    setFormData({...formData, department: department});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addEmployee(formData));
  };

  return (
      <div className={classes.root}>
        <form className={classes.form} noValidate autoComplete="off"
              onSubmit={handleSubmit}>
          <TextField
              label="Name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange('name')}
          />
          <TextField
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange('email')}
          />
          <TextField
              label="Salary"
              variant="outlined"
              value={formData.salary}
              onChange={handleChange('salary')}
              InputProps={{
                startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                ),
              }}

          />
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel id="demo-simple-select-label">Department</InputLabel>
            <Select
                value={formData.department && formData.department.id ?
                    formData.department.id :
                    ''}
                onChange={handleDepartmentChange}
                variant="outlined"
                label="Department"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {
                store.departments.map((dep) => {
                  return (
                      <MenuItem value={dep.id}
                                key={dep.id}>{dep.name}</MenuItem>
                  );
                })
              }
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
        </form>
      </div>
  );
};

export default EmployeeForm;