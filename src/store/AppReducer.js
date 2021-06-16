import {v4 as uuidv4} from 'uuid';

export const ADD_DEPARTMENT = 'APP/ADD_DEPARTMENT';
export const DELETE_DEPARTMENT = 'APP/DELETE_DEPARTMENT';
export const ADD_EMPLOYEE = 'APP/ADD_EMPLOYEE';
export const DELETE_EMPLOYEE = 'APP/DELETE_EMPLOYEE';

export const initialState = JSON.parse(localStorage.getItem('AppData')) || {
  departments: [],
  employees: [],
};

export const addDepartment = (data) => ({
  type: ADD_DEPARTMENT,
  data: {...data, id: uuidv4()},
});
export const deleteDepartment = (id) => ({
  type: DELETE_DEPARTMENT,
  id: id,
});

export const addEmployee = (data) => ({
  type: ADD_EMPLOYEE,
  data: {...data, id: uuidv4()},
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

  if (action.type === DELETE_EMPLOYEE) {
    return {
      ...state,
      employees: state.employees.filter(
          (employee) => employee.id !== action.id),
    };
  }
};