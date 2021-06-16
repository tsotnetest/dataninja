import {useStore} from './store/Store';
import DepartmentForm from './components/DepartmentForm';
import EmployeeForm from './components/EmployeeForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import {useEffect} from 'react';
import Layout from './components/Layout';
import EmployeesList from './components/EmployeesList';
import DepartmentsList from './components/DepartmentsList';

function App() {
  const [store, dispatch] = useStore();
  console.log(store);

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
          <EmployeeForm/>
        </Layout>
      </Route>
      <Route path="/employees">
        <Layout>
          <EmployeesList/>
        </Layout>
      </Route>
      <Route path="/add-department">
        <Layout>
          <DepartmentForm/>
        </Layout>
      </Route>
      <Route path="/departments">
        <Layout>
          <DepartmentsList/>
        </Layout>
      </Route>
    </Switch>
  </Router>;
}

export default App;
