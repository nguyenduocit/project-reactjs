import { combineReducers } from 'redux';
// import các reducers con để combine 
import tasks from './tasks';

const myReducers =  combineReducers({
    tasks, // tương tự như tasks:tasks
});

export default myReducers;