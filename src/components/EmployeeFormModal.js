import React, {useState} from 'react';

import {useStore} from '../store/Store';
import {addEmployee, updateEmployee} from '../store/AppReducer';
import {
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from '@material-ui/core';
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const EmployeeFormModal = (props) => {

  const {visible, onClose, initialData} = props;

  const [store, dispatch] = useStore();
  const classes = useStyles();

  const [formData, setFormData] = useState(
      initialData || {name: '', email: '', salary: '', department: ''});

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
    if (formData.id) {
      dispatch(updateEmployee(formData));
    } else {
      dispatch(addEmployee(formData));
    }

    onClose();
  };

  return (
      <Modal className={classes.root} open={visible} onClose={onClose}>
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
              type={'number'}
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
          <Button variant="contained" color="primary" type="submit"
                  style={{marginTop: 20}}>
            Add
          </Button>
        </form>
      </Modal>
  );
};

export default EmployeeFormModal;