import { combineReducers } from 'redux';
import { alert } from './alert_reducer';

//Combines all reducers for redux
const rootReducer = combineReducers({
    alert,
});

export default rootReducer;