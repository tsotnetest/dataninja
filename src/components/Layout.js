import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Link, useLocation} from 'react-router-dom';
import {Button, Divider} from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {useStore} from '../store/Store';
import {logout} from '../store/AppReducer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    padding: 10,
    '& button': {
      marginLeft: 10,
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

  const [{authToken}, dispatch] = useStore();
  let location = useLocation();

  const activeRoute = location.pathname;

  const routes = [
    {
      to: '/employees',
      icon: <ListIcon/>,
      label: 'Employees list',
    }, {
      to: '/departments',
      icon: <ListIcon/>,
      label: 'Departments list',
    }];

  function handleLogout() {
    dispatch(logout());
  }

  return (
      <div className={classes.root}>
        <div className={classes.header}>
          {routes.map((route, i) => {
            return (
                <Link to={route.to} key={i}>
                  <Button
                      variant="contained"
                      color={activeRoute === route.to ? 'secondary' : 'primary'}
                      startIcon={route.icon}
                  >
                    {route.label}
                  </Button>
                </Link>
            );
          })}
          <div style={{flex: 1}}/>
          {
            authToken && (
                <Button
                    variant="contained"
                    color={'primary'}
                    startIcon={<ExitToAppIcon/>}
                    onClick={handleLogout}
                >
                  Log Out
                </Button>
            )
          }
        </div>
        <Divider/>
        <div className={classes.body}>
          {children}
        </div>
      </div>
  );
};

export default Layout;