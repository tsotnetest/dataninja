import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

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
      <div className={classes.root}/>
  );
};

export default Home;