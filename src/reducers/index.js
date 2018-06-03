import { combineReducers } from 'redux';
// import các reducers con để combine 
import tasks from './tasks';
import actionForm from './actionForm';
import updateItem from './updateItem';

const myReducers =  combineReducers({
    tasks, // tương tự như tasks:tasks
    actionForm, // tương tự như ationForm:ationForm
    updateItem,
});

export default myReducers;