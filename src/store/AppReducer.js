import {v4 as uuidv4} from 'uuid';

export const LOGIN = 'APP/LOGIN';
export const LOGOUT = 'APP/LOGOUT';

export const ADD_DEPARTMENT = 'APP/ADD_DEPARTMENT';
export const UPDATE_DEPARTMENT = 'APP/UPDATE_DEPARTMENT';
export const DELETE_DEPARTMENT = 'APP/DELETE_DEPARTMENT';
export const ADD_EMPLOYEE = 'APP/ADD_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'APP/UPDATE_EMPLOYEE';
export const DELETE_EMPLOYEE = 'APP/DELETE_EMPLOYEE';

export const initialState = JSON.parse(localStorage.getItem('AppData')) || {
  departments: [],
  employees: [],
};

export const login = (data) => ({
  type: LOGIN,
  data: data,
});
export const logout = () => ({
  type: LOGOUT,
});

export const addDepartment = (data) => ({
  type: ADD_DEPARTMENT,
  data: {...data, id: uuidv4()},
});
export const updateDepartment = (data) => ({
  type: UPDATE_DEPARTMENT,
  data: data,
});
export const deleteDepartment = (id) => ({
  type: DELETE_DEPARTMENT,
  id: id,
});

export const addEmployee = (data) => ({
  type: ADD_EMPLOYEE,
  data: {...data, id: uuidv4()},
});
export const updateEmployee = (data) => ({
  type: UPDATE_EMPLOYEE,
  data: data,
});
export const deleteEmployee = (id) => ({
  type: DELETE_EMPLOYEE,
  id: id,
});

export const appReducer = (state = initialState, action) => {
  if (action.type === ADD_DEPARTMENT) {
    return {
      ...state,
      departments: state.departments.concat(action.data),
    };
  }
  if (action.type === UPDATE_DEPARTMENT) {
    return {
      ...state,
      departments: state.departments.map((dep)=>{
        if(dep.id === action.data.id){
          return action.data;
        }
        return dep;
      }),
    };
  }
  if (action.type === DELETE_DEPARTMENT) {
    return {
      ...state,
      departments: state.departments.filter((dep) => dep.id !== action.id),
    };
  }

  if (action.type === ADD_EMPLOYEE) {
    return {
      ...state,
      employees: state.employees.concat(action.data),
    };
  }
  if (action.type === UPDATE_EMPLOYEE) {
    return {
      ...state,
      employees: state.employees.map((emp)=>{
        if(emp.id === action.data.id){
          return action.data;
        }
        return emp;
      }),
    };
  }

  if (action.type === DELETE_EMPLOYEE) {
    return {
      ...state,
      employees: state.employees.filter(
          (employee) => employee.id !== action.id),
    };
  }

  if (action.type === LOGIN) {
    return {
      ...state,
      authToken: 'test-token',
    };
  }
  if (action.type === LOGOUT) {
    return {
      ...state,
      authToken: undefined,
    };
  }
};