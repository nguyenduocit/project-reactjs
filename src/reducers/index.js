import {combineReducers} from  'redux';
import tasks from './tasks';
var  myReducers = combineReducers({
    tasks : tasks
});

export default myReducers;