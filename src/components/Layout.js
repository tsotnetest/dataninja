import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Link, useLocation} from 'react-router-dom';
import {Button, Divider} from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    height: 60,
    '& button': {
      margin: '10px 0 0 10px',
    },
    '& a': {
      textDecoration: 'none',
    },
  },
  body: {
    flex: 1,
  },
}));

const Layout = ({children}) => {
  const classes = useStyles();

  let location = useLocation();

  const activeRoute = location.pathname;

  const routes = [
    {
      to: '/employees',
      icon: <ListIcon/>,
      label: 'Employees list'
    }, {
      to: '/departments',
      icon: <ListIcon/>,
      label: 'Departments list'
    }];

  return (
      <div className={classes.root}>
        <div className={classes.header}>
          {routes.map((route, i) => {
            return (
                <Link to={route.to} key={i}>
                  <Button
                      variant="contained"
                      color={activeRoute === route.to ? "secondary" : "primary"}
                      startIcon={route.icon}
                  >
                    {route.label}
                  </Button>
                </Link>
            );
          })}
        </div>
        <Divider/>
        <div className={classes.body}>
          {children}
        </div>
      </div>
  );
};

export default Layout;