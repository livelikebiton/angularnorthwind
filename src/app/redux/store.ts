import { productsReducer } from './products-state';
import { combineReducers, createStore } from "redux";
import { employeesReducer } from './employees-state';
import { authReducer } from './auth-state';

const reducers = combineReducers({ authState: authReducer, productsState: productsReducer, employeesState: employeesReducer});
const store = createStore(reducers);

export default store;