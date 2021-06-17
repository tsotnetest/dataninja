import {useStore} from './store/Store';
import DepartmentFormModal from './components/DepartmentFormModal';
import EmployeeFormModal from './components/EmployeeFormModal';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import {useEffect} from 'react';
import Layout from './components/Layout';
import EmployeesList from './components/EmployeesList';
import DepartmentsList from './components/DepartmentsList';
import AuthModal from './components/AuthModal';

function App() {
  const [store] = useStore();

  useEffect(() => {
    localStorage.setItem('AppData', JSON.stringify(store));
  }, [store]);

  return <Router>
    <Switch>
      <Route exact path="/">
        <Layout>
          <Home/>
        </Layout>
      </Route>
      <Route path="/add-employee">
        <Layout>
          <EmployeeFormModal/>
        </Layout>
      </Route>
      <Route path="/employees">
        <Layout>
          <EmployeesList/>
        </Layout>
      </Route>
      <Route path="/add-department">
        <Layout>
          <DepartmentFormModal/>
        </Layout>
      </Route>
      <Route path="/departments">
        <Layout>
          <DepartmentsList/>
        </Layout>
      </Route>
    </Switch>
    <AuthModal/>
  </Router>;
}

export default App;
