import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
  Link,
} from 'react-router-dom';
import {Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles((theme) => ({
  root: {
    '& button': {
      margin: '10px 0 0 10px',
    },
    '& a': {
      textDecoration: 'none'
    }
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Link to="/add-employee">
          <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon/>}
          >
            Add employee
          </Button>
        </Link>
        <Link to="/employees">
          <Button
              variant="contained"
              color="primary"
              startIcon={<ListIcon/>}
          >
            Employees list
          </Button>
        </Link>
        <Link to="/add-department">
          <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon/>}
          >
            Add department
          </Button>
        </Link>
        <Link to="/departments">
          <Button
              variant="contained"
              color="primary"
              startIcon={<ListIcon/>}
          >
            Departments list
          </Button>
        </Link>
      </div>
  );
};

export default Home;