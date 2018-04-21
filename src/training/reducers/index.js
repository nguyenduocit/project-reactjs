// import reducers status
import status from './status';
// import reducers sort 
import sort from './sort';
// ghop 2 bien sort va status lai
import {combineReducers} from 'redux';

const myReducer = combineReducers({
    status ,
    sort
});
export default myReducer;